import{j as r}from"./iframe-CHDu_H0e.js";import{B as o}from"./Button-Dmc7YjrG.js";import{A as T}from"./ActionGroup-DIURYoSw.js";import{L as s,a as y}from"./LightBox-MKIqxlua.js";import{I as m}from"./Image-JI17nYBo.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Cf1n4vGG.js";import{u as w}from"./DialogTriggerView-CT9wuhNv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./Text-mNtFSOkr.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";import"./Text-DpQKzoec.js";import"./utils-DYZAD9ft.js";import"./LoadingSpinner-BjRJkl53.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./context-Bzaz4S39.js";import"./Button-Rg6_nSUL.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UC_sG4c4.js";import"./useFocus-C89269kJ.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DDu1koB4.js";import"./useStatic-ByFeMtaE.js";import"./Overlay-D2AeWaGk.js";import"./Dialog-CCYlg5iI.js";import"./RSPContexts-CZTMu11O.js";import"./OverlayArrow-BpSuH-di.js";import"./useControlledState-DzyFh4kD.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./Group-DC1YgkeM.js";import"./SearchField-DemnD7Hf.js";import"./FieldError-CKgwUKxI.js";import"./Form-BFPhVCnm.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./TextField-DCfchb8N.js";import"./useEvent-CII2lm4p.js";import"./SelectionManager-C-zRxePL.js";import"./useCollator-P2wX32qN.js";import"./FocusScope-CpdigEHe.js";import"./VisuallyHidden-BP6BNrRi.js";import"./ButtonView-CJmnRcD9.js";import"./context-BsLhxCGe.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
