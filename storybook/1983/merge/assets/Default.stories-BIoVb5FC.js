import{j as r}from"./iframe-C41GO6P6.js";import{B as o}from"./Button-EU7ZCBUb.js";import{A as T}from"./ActionGroup-BO8EJ9_Y.js";import{L as s,a as y}from"./LightBox-Cu8EWnaO.js";import{I as m}from"./Image-oASVOgE8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-C5RwbqDR.js";import{u as w}from"./DialogTriggerView-BwB5gCJZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./Text-BYSgteT5.js";import"./browser-DspoMTVt.js";import"./EmulatedBoldText-CJIUXOgz.js";import"./Text-Bnb73OL0.js";import"./utils-Be5F4DcQ.js";import"./LoadingSpinner-MF8PlszG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./context-Om8YW_Qo.js";import"./Button-DlD3fRGu.js";import"./ProgressBar-BdICdwMW.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel--RfYT5XW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSqdD5KI.js";import"./useFocus-CcyM5uvG.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocusable-DyjaqCu5.js";import"./dynamic-DxnCaHhV.js";import"./getActionGroupSlot-BqgUIaia.js";import"./useStatic-DHBtTVNq.js";import"./Overlay-vVze8noH.js";import"./ClearPropsContextView-CpAffOzl.js";import"./useControlledState-D2xxPiTl.js";import"./ButtonView-CFDj8nHq.js";import"./context-1RA5jvOs.js";import"./RSPContexts-B6QAlzIf.js";import"./FocusScope-V0DR1oSw.js";import"./useCollator-D5nYlsQq.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./Collection-C5OyY5G9.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Separator-CWruQEFN.js";import"./Group-celsVWdW.js";import"./SearchField-BbBM1aCT.js";import"./FieldError-qUs-TTn2.js";import"./Form-DZUJdQjd.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./TextField-DApuMKmH.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
