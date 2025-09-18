import{j as r}from"./iframe-DjIVRH0F.js";import{B as o}from"./Button-CKSxfzxQ.js";import{A as T}from"./ActionGroup-Dv82y2TA.js";import{L as s,a as y}from"./LightBox-CBHTZTLt.js";import{I as m}from"./Image-ezXd4vKr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-uc5JkYTm.js";import{u as w}from"./DialogTriggerView-CgY0Mhwe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./Text-B5KpGvlT.js";import"./browser-Ba6KZWy-.js";import"./EmulatedBoldText-BSrsAcTM.js";import"./Text-9ugGFdig.js";import"./utils-G1KHONaq.js";import"./LoadingSpinner-BHwXHxWg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./context-C7KKbhVC.js";import"./Button-D_xR0uNa.js";import"./ProgressBar-BaoSLR_g.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-sV0m1Yjo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-QkjqUEXJ.js";import"./useFocus-diUUCuvP.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocusable-DNULE2pv.js";import"./dynamic-BVw0yKPJ.js";import"./getActionGroupSlot-vPbFTM92.js";import"./useStatic-CHo6Lgk7.js";import"./Overlay-ieArjf1M.js";import"./ClearPropsContextView-BhG_516u.js";import"./useControlledState-Cd9JFs6w.js";import"./ButtonView-D2sihJb1.js";import"./context-DDhUpvCG.js";import"./RSPContexts-yaPVYaSw.js";import"./FocusScope-CAKHANYN.js";import"./useCollator-CAX-XvSk.js";import"./VisuallyHidden-snqvTAFU.js";import"./Collection-CjltVSE8.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Separator-BOn94nxb.js";import"./Group-C6OJiXrI.js";import"./SearchField-CkG4r_An.js";import"./FieldError-NAgWSsRG.js";import"./Form-Dzmx2_fB.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./TextField-BtiUxXGx.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
