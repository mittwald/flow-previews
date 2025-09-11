import{j as r}from"./iframe-CyjdJwA_.js";import{B as o}from"./Button-CWr2AVcL.js";import{A as T}from"./ActionGroup-CCdH3MqH.js";import{L as s,a as y}from"./LightBox-CiNsEoBr.js";import{I as m}from"./Image-D3OtxWkZ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BNd_xcWu.js";import{u as w}from"./DialogTriggerView-BaCd4fKq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./Text-usW35pyR.js";import"./browser-COCGQLuR.js";import"./EmulatedBoldText-Cm98uRnm.js";import"./Text-D5hkVXTt.js";import"./utils-BrA2SjLY.js";import"./LoadingSpinner-Cs_zZqgK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./context-U2uVXE2j.js";import"./Button-DtnX1sXm.js";import"./ProgressBar-ClszfSN8.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CugdBF8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DeuQBFn_.js";import"./useFocus-kh_9V4VQ.js";import"./useFocusRing-CIRJex-W.js";import"./useFocusable-Bd5Kcxc9.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Dg5re8Hn.js";import"./useStatic-Cvg4-ciK.js";import"./Overlay-DHVFDrDx.js";import"./Dialog-CDIzoxMq.js";import"./RSPContexts-CNBrQuIV.js";import"./OverlayArrow-DmbU7KN6.js";import"./useControlledState-BMmGZgaN.js";import"./Collection-BOX-2d7N.js";import"./CollectionBuilder-CmkEkI_W.js";import"./Separator-CV-ezLmw.js";import"./Group-fGbj7PxB.js";import"./SearchField-CcfmTUF_.js";import"./FieldError-FJXabK8a.js";import"./Form-CbzZ-2v4.js";import"./useTextField-Ck4Yz0Jg.js";import"./useFormReset-DhmyIfWL.js";import"./TextField-CvU05O_G.js";import"./useEvent-CI_dmwlv.js";import"./SelectionManager-bu__7N-a.js";import"./useCollator-Bj1Rn4ie.js";import"./FocusScope-BgpQQFhh.js";import"./VisuallyHidden-DG_rebhq.js";import"./ButtonView-D0NnXWhL.js";import"./context-D_hcNXze.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
