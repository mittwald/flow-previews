import{j as r}from"./iframe-YnzBkBP1.js";import{B as o}from"./Button-BvFsSv02.js";import{A as l}from"./ActionGroup-Cw5QmZ4Y.js";import{L as s,a as d}from"./LightBox-CMEkzECN.js";import{I as m}from"./Image-A2iC_LjC.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-CfrgrK5w.js";import{u as h}from"./useOverlayController-BBC78SET.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./Text-CErt044E.js";import"./browser-Sf85iaAd.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./utils-CRkRQkMM.js";import"./LoadingSpinner-z9BQWCCX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./context-Dc351FW_.js";import"./remote-psJ_k7Km.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NgaP4MvP.js";import"./useFocus-CEJfh5Ox.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./dynamic-DAiG6Vmq.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./useStatic-9o3ywd_N.js";import"./OverlayTrigger-B11Ab0Yr.js";import"./Dialog-971pU4tV.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./useControlledState-DwL8StHF.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./VisuallyHidden-BsENeWhO.js";import"./context-CGFBFC28.js";import"./OverlayContextProvider-JV42Gzf_.js";import"./DialogTriggerView-Di8ud54V.js";import"./Overlay-BEBtPs6q.js";import"./DivView-Cq8WkL3e.js";import"./ButtonView-C86qpyt3.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("LightBox");
    return <>
        <Button onPress={controller.open}>Open LightBox</Button>
        <LightBox {...props} controller={controller}>
          <Image src={dummyText.imageSrc} />
          <ActionGroup>
            <Button>
              <IconDownload />
            </Button>
            <Button>
              <IconDelete />
            </Button>
          </ActionGroup>
        </LightBox>
      </>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...n.parameters?.docs?.source}}};const Lr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Lr as __namedExportsOrder,fr as default};
