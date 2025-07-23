import{j as r}from"./iframe-CIziUxb4.js";import{B as o}from"./Button-Bo5QyJiI.js";import{A as T}from"./ActionGroup-gPOC8Udj.js";import{L as m,a as y}from"./LightBox-Cp_68j_p.js";import{I as s}from"./Image-BHZx5vm0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Bo3R4dY7.js";import{u as w}from"./DialogTriggerView-BBwhD0Uy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./Text-BbvPR7fy.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Text-CgaJS0Gc.js";import"./utils-CDtaCsrA.js";import"./LoadingSpinner-CF4f6GZw.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./context-COqsJpPE.js";import"./Button-Cv6Z8Boo.js";import"./ProgressBar-Cyf_qqmn.js";import"./Label-CjcM3hPV.js";import"./Hidden-FsuglVKe.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-xKHqVDKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBbw6zuw.js";import"./useFocus-C2EjpkOi.js";import"./useFocusRing-GixRvSCg.js";import"./useFocusable-CTkb3k3n.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bm-tl-k-.js";import"./useStatic-jzgjWO-I.js";import"./Overlay-Cfp0csIz.js";import"./Dialog-DrnAiCXy.js";import"./RSPContexts-C-PXoOC4.js";import"./OverlayArrow-Crxssx6c.js";import"./useControlledState-DVvxwSwc.js";import"./Collection-DWx577Su.js";import"./CollectionBuilder-juJreXU3.js";import"./Separator-DwuryqiD.js";import"./Input-BwarHJUi.js";import"./SearchField-B6_Arn2l.js";import"./FieldError-D98nnMcy.js";import"./Form-B_FAPEGw.js";import"./Group-OTUHyQEq.js";import"./useTextField-a1-urwSv.js";import"./useFormReset-TpB1RScY.js";import"./TextField-BmMhD-pd.js";import"./SelectionManager-DkqMHGWK.js";import"./useEvent-CS1uc1JE.js";import"./useCollator-Bw9Jdjt0.js";import"./FocusScope-BxmYTtWO.js";import"./VisuallyHidden-D_XOb9iP.js";import"./DivView-29HYNjw6.js";import"./ButtonView-DiJ0o7jC.js";import"./context-DRI9dj_K.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
