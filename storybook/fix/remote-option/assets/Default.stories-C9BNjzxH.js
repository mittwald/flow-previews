import{j as r}from"./iframe-BrFbgMdZ.js";import{B as o}from"./Button-DrqjXTlc.js";import{A as T}from"./ActionGroup-DRgN58LI.js";import{L as s,a as y}from"./LightBox-CrAKC1xw.js";import{I as m}from"./Image-DjO1SV4m.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-aBCbZP3e.js";import{u as w}from"./DialogTriggerView-1Z-HkVsl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./Text-C3YpUANr.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";import"./Text-B3veiim8.js";import"./utils-uGt6lEHy.js";import"./LoadingSpinner-3OtgiQa9.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./context-B0-ElNi2.js";import"./Button-dFM767hW.js";import"./ProgressBar-CACYrIaY.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BY-hcXqn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./useFocus-D9Wd5vZ-.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B9Qutl-P.js";import"./useStatic-BFH-Nkbb.js";import"./Overlay-CcZvx1_1.js";import"./Dialog-CO5NQ1rj.js";import"./RSPContexts-Dtf8PKxD.js";import"./OverlayArrow-BK6QcEmE.js";import"./useControlledState-n0b34ryi.js";import"./Collection-Djxaz1Ld.js";import"./CollectionBuilder-DxJUJjXq.js";import"./Separator-wEFTp470.js";import"./Group-BgvCwvxg.js";import"./SearchField-BfR4RjBt.js";import"./FieldError-DSdi5gGz.js";import"./Form-DphLKB0O.js";import"./useTextField-Hu8b04JP.js";import"./useFormReset-UpbI-Wf0.js";import"./TextField-Cv2sUUZR.js";import"./useEvent-8VQ1yeDi.js";import"./SelectionManager-BC1RK9KO.js";import"./useCollator-BKa_st1y.js";import"./FocusScope-ksb906db.js";import"./VisuallyHidden-BzneT5H9.js";import"./DivView-Ybyxpaos.js";import"./ButtonView-b6bd-a1R.js";import"./context-CFd8jkW8.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
