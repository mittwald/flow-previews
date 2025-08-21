import{j as r}from"./iframe-B5f77The.js";import{B as o}from"./Button-C6w7hggk.js";import{A as T}from"./ActionGroup-DfoGwboo.js";import{L as s,a as y}from"./LightBox-Dj7kylK5.js";import{I as m}from"./Image-BJKAhFWX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a8 as O}from"./IconWarning-ljKjKfGj.js";import{u as w}from"./DialogTriggerView-CpbUus_v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./Text-C70_tpAy.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";import"./Text-CRBsFpfB.js";import"./utils-DeVL3yHt.js";import"./LoadingSpinner-CEnOuMOV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./context-CDDYAalq.js";import"./Button-BJ8WzA2D.js";import"./ProgressBar-roFwkZNY.js";import"./Label-BtB0U_ml.js";import"./Hidden-DpLdfkk6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZo659VM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1oGQ4tq.js";import"./useFocus-CpnAUhj6.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocusable-DVnwojtz.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BG28dPQB.js";import"./useStatic-L57Eul26.js";import"./Overlay-Bmxq8yrf.js";import"./Dialog-BrLEju1s.js";import"./RSPContexts-B32A1VhO.js";import"./OverlayArrow-DxI9FzZ3.js";import"./useControlledState-BsCYAcFS.js";import"./Collection-Dq30mKZW.js";import"./CollectionBuilder-IT3s11YO.js";import"./Separator-CP2Hv3YB.js";import"./Group-cw_ccGJA.js";import"./SearchField-C4CWzvZC.js";import"./FieldError-CmSoGLTN.js";import"./Form-COFPxk6e.js";import"./useTextField-DOFOnMON.js";import"./useFormReset-CoVNXXZK.js";import"./TextField-DLnVqMvq.js";import"./useEvent-Bi5phJIq.js";import"./SelectionManager-CT47WU_1.js";import"./useCollator-CMx4eqOS.js";import"./FocusScope-DJcQajcM.js";import"./VisuallyHidden-BRRdMKGS.js";import"./ButtonView-BF425EBo.js";import"./context-CKo78_m4.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
