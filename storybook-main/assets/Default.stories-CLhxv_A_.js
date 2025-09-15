import{j as r}from"./iframe-BEG7G6KF.js";import{B as o}from"./Button-C8pjFnNt.js";import{A as T}from"./ActionGroup-CUmh4KBz.js";import{L as s,a as y}from"./LightBox-DBr4z823.js";import{I as m}from"./Image-C4e5pfOF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-a2LhFy5L.js";import{u as w}from"./DialogTriggerView-QPowEEXn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./Text-CsmURpVi.js";import"./browser-hhGcWijl.js";import"./EmulatedBoldText-BEr1TBhP.js";import"./Text-CjtFlosk.js";import"./utils-LUgpLpbe.js";import"./LoadingSpinner-SGV_yUHE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./context-PcVqvq8B.js";import"./Button-DTQhGa04.js";import"./ProgressBar-ZHT95b40.js";import"./Label-14uT22y-.js";import"./Hidden-CoHG5x6F.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bw-P6Vd2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CNi18aVS.js";import"./useFocus-C-WlMmOQ.js";import"./useFocusRing-COhl_nbF.js";import"./useFocusable-CiBlyEkt.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-P9UQ3z6q.js";import"./useStatic-HcSwkvD9.js";import"./Overlay-HjDW-fEQ.js";import"./Dialog-B1wekzMl.js";import"./RSPContexts-BS1UUkSC.js";import"./OverlayArrow-DQ1DVDYI.js";import"./useControlledState-D4nWDDQs.js";import"./Collection-Q6_7RVnG.js";import"./CollectionBuilder-BfQ_bfa9.js";import"./Separator-CEaf2o7P.js";import"./Group-Bu8ViuOf.js";import"./SearchField-DCAIqxcw.js";import"./FieldError-Ce2Todsu.js";import"./Form-CRnDK1No.js";import"./useTextField-DYB1JFCS.js";import"./useFormReset-D7bUq-wz.js";import"./TextField-BtimxscU.js";import"./useEvent-CaCnB0bX.js";import"./SelectionManager-CXVNswVM.js";import"./useCollator-CTD1PftI.js";import"./FocusScope-CVsbtSBN.js";import"./VisuallyHidden-DBx6majZ.js";import"./ButtonView-BBTOGe_F.js";import"./context-C9GFjuXq.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
