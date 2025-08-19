import{j as r}from"./iframe-CqOqoVaP.js";import{B as o}from"./Button-CLlHTQEG.js";import{A as T}from"./ActionGroup-DjMrk1wi.js";import{L as s,a as y}from"./LightBox-BxfMSgqC.js";import{I as m}from"./Image-CT4pXy-C.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a8 as O}from"./IconWarning-Bl-oEACJ.js";import{u as w}from"./DialogTriggerView-DwJ6gTTr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./Text-B3-X_MJa.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./Text-cqx9MXzt.js";import"./utils-CLjii6jw.js";import"./LoadingSpinner-ABbum_Xg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./context-V257UCTc.js";import"./Button-C385LXs-.js";import"./ProgressBar-C7nzlf9n.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BbxdwBsw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-bNRByjMC.js";import"./useFocus-B9OFNFcs.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocusable-BW0s8v46.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./useStatic-BhcqT1RN.js";import"./Overlay-DOnylHm7.js";import"./Dialog-C3VX0NXb.js";import"./RSPContexts-D4Iw314Z.js";import"./OverlayArrow-Demj6cv0.js";import"./useControlledState-BdCCPWsc.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./Group-Cl8UGCCk.js";import"./SearchField-AywMrJlM.js";import"./FieldError-Db8jl934.js";import"./Form-DfmQoqyq.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./TextField-DbkzlANK.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./useCollator-C8Ow2U1A.js";import"./FocusScope-C_8IMyFN.js";import"./VisuallyHidden-BthzWCih.js";import"./ButtonView-CW59tH2E.js";import"./context-DEmZbP6Z.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
