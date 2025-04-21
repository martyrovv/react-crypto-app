
export function mapAssetsDtoToAssets(assets) {
    return (
        assets.map((a) => ({
            key: a.id,
            name: a.name,
            price: a.price,
            amount: a.amount,
            }))
    )

};

export function mapFilters(assets) {
    return(
        assets.map((n) => ({
            text: n.name,
            value: n.name
          }))
    )
}