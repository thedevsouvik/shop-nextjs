export default function Home() {
  return (
    <main>
      <h1 className="p-1 bg-white mb-0.5">Homepage main component</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <p key={i} className="p-1 bg-white my-0.5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
          consequatur eum reiciendis pariatur? Quas beatae, voluptates sequi et
          esse placeat dolores sunt atque in odit accusamus eos illo
          voluptatibus sed nihil excepturi deserunt velit? Hic iusto quasi, ex
          dolorem ut ratione facilis suscipit iure omnis, quos sint numquam
          cumque eos repellendus dolores accusantium illum ipsa consequatur rem.
          Ipsa excepturi iusto minima molestias eaque facilis?
        </p>
      ))}
    </main>
  );
}
