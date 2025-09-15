import{j as r}from"./iframe-Bok6IQju.js";import{B as o}from"./Button-I2NsynHm.js";import{A as T}from"./ActionGroup-GRnRB8Av.js";import{L as s,a as y}from"./LightBox-DRIzu5T8.js";import{I as m}from"./Image-CQ7kPsFe.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a7 as O}from"./IconWarning-DqBq2uRB.js";import{u as w}from"./DialogTriggerView-EJLujKFA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./Text-BAsYg4gL.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";import"./utils-Cq7OaFeW.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./context-BMAErJH4.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./dynamic-BxA90To4.js";import"./getActionGroupSlot-Dxq8Ia-H.js";import"./useStatic-CXnTBCs5.js";import"./Overlay-DpyJ0zzD.js";import"./Dialog-CcOFZkKF.js";import"./RSPContexts-DI5gwLuS.js";import"./OverlayArrow-_F5PaUR8.js";import"./useControlledState-B8rFPIj3.js";import"./Collection-DLNYYfFu.js";import"./CollectionBuilder-DE8Itz9_.js";import"./Separator-BrmCJU2D.js";import"./Group-_2KGjRtF.js";import"./SearchField-Dn82cF-B.js";import"./FieldError-MhOXyUFr.js";import"./Form-COiMNxjB.js";import"./useTextField-B52zV2BM.js";import"./useFormReset-BWLOy0Jx.js";import"./TextField-B7RWcShV.js";import"./useEvent-Byqgoyh2.js";import"./SelectionManager-YV1jDUXg.js";import"./useCollator-DW_vDOK-.js";import"./FocusScope-BqlGKiq6.js";import"./VisuallyHidden-C0tUvQRs.js";import"./ButtonView-CJ5zsDg4.js";import"./context-BE37SzUM.js";import"./ControlledNotification-CkAH0xrz.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
