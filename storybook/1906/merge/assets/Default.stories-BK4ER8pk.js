import{j as r}from"./iframe-fiZAYE2W.js";import{B as o}from"./Button-CPh6A0ie.js";import{A as T}from"./ActionGroup-D2f9H7rC.js";import{L as s,a as y}from"./LightBox-C7EP7lDY.js";import{I as m}from"./Image-CMGgExJW.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-CB_niWR5.js";import{u as w}from"./DialogTriggerView-D_9nk-w4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./Text-BgnbdcU8.js";import"./browser-BJ9bzP1_.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./Text-H6cA9zz3.js";import"./utils-sHGDZ6Zl.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./context-0IVozT_C.js";import"./Button-DkSlR_xh.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-8IHfk19G.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-j57SM-Nw.js";import"./useFocus-Bwj4tK_H.js";import"./useFocusRing-B57qzYJa.js";import"./useFocusable-DMthjPSk.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BXjTWZDP.js";import"./useStatic-DK8KGoVH.js";import"./Overlay-B9-qZz7Q.js";import"./Dialog-CPiJaMak.js";import"./RSPContexts-DEEb3C3L.js";import"./OverlayArrow-CoJAbzkc.js";import"./useControlledState-Dazdo7hG.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./Group-BCt9JR72.js";import"./SearchField-CnjX_-ia.js";import"./FieldError-DfP4BUoL.js";import"./Form-BAG0Y1U9.js";import"./useTextField-CbBTT6Wa.js";import"./useFormReset-Du9grFIi.js";import"./TextField-qcgW8owJ.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./useCollator-BdIY4eGy.js";import"./FocusScope-BzxFGsrZ.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./ButtonView-DQZf1NvB.js";import"./context-BP9RYxVP.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var L,S,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
