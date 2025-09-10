import{j as r}from"./iframe-BpdxrwIb.js";import{B as o}from"./Button-CwyQ24Il.js";import{A as T}from"./ActionGroup-Dk7-IbAC.js";import{L as s,a as y}from"./LightBox-CQY_NQRu.js";import{I as m}from"./Image-IjXh8yB8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-DfpVuNuz.js";import{u as w}from"./DialogTriggerView-B4FX_acS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./Text-DE4Q9wlE.js";import"./browser-CjlkZb14.js";import"./EmulatedBoldText-BK7BqSsu.js";import"./Text-s-uJNCfK.js";import"./utils-60PhQC-u.js";import"./LoadingSpinner-CTxNA6YP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./context-CefFUzIe.js";import"./Button-0E_exH3L.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXS9utKX.js";import"./useFocus-C0zYbozs.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-8B6o1Jcn.js";import"./useStatic-_L-kGsxT.js";import"./Overlay-BPc38Bhx.js";import"./Dialog--6GRJbyV.js";import"./RSPContexts-COprRsvg.js";import"./OverlayArrow-C7JKPmKj.js";import"./useControlledState-BiXfF0Y1.js";import"./Collection-DxypVpmd.js";import"./CollectionBuilder-DBkURgoe.js";import"./Separator-DodoKnoT.js";import"./Group-DJY0cn_B.js";import"./SearchField-DAJQjktq.js";import"./FieldError-CSYQEfgd.js";import"./Form-BBooAEet.js";import"./useTextField-BxOi2WYK.js";import"./useFormReset-BDGpTE2A.js";import"./TextField-Ikioio4Y.js";import"./useEvent-CgmVVSAd.js";import"./SelectionManager-u7tMSqsB.js";import"./useCollator-YHcMoLBN.js";import"./FocusScope-CzMQYsxZ.js";import"./VisuallyHidden-C_bZjV4d.js";import"./ButtonView-UYp6GouB.js";import"./context-Cy2K_ymr.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
