import{j as r}from"./iframe-r2ISa6Vz.js";import{B as o}from"./Button-MKxMP2k4.js";import{A as T}from"./ActionGroup-B6GN3Zlk.js";import{L as s,a as y}from"./LightBox-Ba7rdC0v.js";import{I as m}from"./Image-Cip8MuE7.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DfNEkDa-.js";import{u as w}from"./DialogTriggerView-PP0jMcbF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./Text-DXIJD_mG.js";import"./browser-vniJOv6A.js";import"./EmulatedBoldText-DORQB6U8.js";import"./Text--yGrToJ3.js";import"./utils-DwHpNHaD.js";import"./LoadingSpinner-BAfbRjK8.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./context-AXeZ-4C7.js";import"./Button-B3sV0uoO.js";import"./ProgressBar-BIuQEpdf.js";import"./Label-D9vBeQ72.js";import"./Hidden-3Y5hF2-9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C31-NaD3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIA34O1p.js";import"./useFocus-De90M8h7.js";import"./useFocusRing-Dm8SMHzX.js";import"./useFocusable-BHAsUzIM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B_TikFXZ.js";import"./useStatic-TtOui2SW.js";import"./Overlay-DUody709.js";import"./Dialog-BtlI13OW.js";import"./RSPContexts-BxS850vN.js";import"./OverlayArrow-DAzMh1Ha.js";import"./useControlledState-DWYZHaxy.js";import"./Collection-C-bKGm-J.js";import"./CollectionBuilder-DCMEaYz9.js";import"./Separator-1SYB0Oyv.js";import"./Group-DmvaYMW3.js";import"./SearchField-Cl7GqbCS.js";import"./FieldError-h_DzRRQi.js";import"./Form-BGPVVXS4.js";import"./useTextField-N_W8v2lE.js";import"./useFormReset-Cehr99bh.js";import"./TextField-CeohDO7l.js";import"./useEvent-B23TrCpv.js";import"./SelectionManager-BzHF4j0O.js";import"./useCollator-BnQV3F6v.js";import"./FocusScope-C4ChjLNl.js";import"./VisuallyHidden-DXZRkoBb.js";import"./DivView-Bf1jJwcD.js";import"./ButtonView-CQw6_CKH.js";import"./context-B0bSHq_C.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
