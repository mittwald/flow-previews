import{j as r}from"./iframe-DIlFkKfe.js";import{B as o}from"./Button-BvaN7Y-D.js";import{A as T}from"./ActionGroup-tXTsTMNc.js";import{L as s,a as y}from"./LightBox-ChRNP-V8.js";import{I as m}from"./Image-wcOkT8WU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BS6-kuBv.js";import{u as w}from"./DialogTriggerView-B86hnYR6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./Text-CG4Ucl9p.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";import"./Text-DuUlrCBa.js";import"./utils-E_0WoXkF.js";import"./LoadingSpinner-wlCv7fWm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./context-BIl-kujG.js";import"./Button-pHXSBUAI.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtXixU_d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D9JeOi6r.js";import"./useFocus-CiEitWNM.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-I5c5cWG6.js";import"./useStatic-D-gec7Hx.js";import"./Overlay-SU_iDKgB.js";import"./Dialog-CjLiSQnW.js";import"./RSPContexts-BFg1cs6H.js";import"./OverlayArrow-C5Az4zJe.js";import"./useControlledState-CWVlWyPG.js";import"./Collection-BBECU8Th.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Separator-BYxoqALx.js";import"./Group-CabJqO_k.js";import"./SearchField-BU427pXg.js";import"./FieldError-5aNzky8T.js";import"./Form-HyfIN8sB.js";import"./useTextField-Bo95H554.js";import"./useFormReset-BM0i_QS2.js";import"./TextField-BSCkD-qq.js";import"./useEvent-BZtMxgrD.js";import"./SelectionManager-_Z7bs6df.js";import"./useCollator-CcgJo-Oq.js";import"./FocusScope-C9n1sP7L.js";import"./VisuallyHidden-DzVxkJhT.js";import"./ButtonView-CaDIv6cT.js";import"./context-SLpiSpKp.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
