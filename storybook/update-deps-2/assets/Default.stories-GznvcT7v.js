import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{B as o}from"./Button-HNIyHWur.js";import{A as T}from"./ActionGroup-CU_DCJPO.js";import{L as s,a as y}from"./LightBox-CVHNd_yn.js";import{I as m}from"./Image-DqEeHv1d.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{x as G,y as O}from"./IconWarning-Dhqk9c5Q.js";import{u as w}from"./OverlayTrigger-zrHS2epI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./Text-DAta9oPQ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-RYc5i20l.js";import"./utils-D9H5ZYVa.js";import"./LoadingSpinner-DV38nRyp.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./Button-C4BByqx5.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Q0xeGE_F.js";import"./useStatic-_S75A7Vn.js";import"./Dialog-B0vEu32W.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-DLYo5xVk.js";import"./useControlledState-YIijONQK.js";import"./Collection-DH8MVYRU.js";import"./CollectionBuilder-B62dxoFp.js";import"./Separator-CJYrkcAH.js";import"./SelectionManager-Clajy7Q-.js";import"./useEvent-CfLopXbq.js";import"./useCollator-B5zTmuon.js";import"./FocusScope-me2WFoLK.js";import"./VisuallyHidden-CNMq674x.js";import"./Overlay-PiKRkNXt.js";import"./context-C9AG9o4h.js";const Gr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Or=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Or as __namedExportsOrder,Gr as default};
