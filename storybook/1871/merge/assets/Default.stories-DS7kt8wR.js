import{j as r}from"./iframe-C1l4k2HV.js";import{B as o}from"./Button-CknaAKeQ.js";import{A as T}from"./ActionGroup-BYkyVYsH.js";import{L as s,a as y}from"./LightBox-CO7NL_40.js";import{I as m}from"./Image-DwSjGun0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DU-YpMEs.js";import{u as w}from"./DialogTriggerView-CDSNVlGP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-UGszKfi1.js";import"./mergeRefs-Dwr6BYYS.js";import"./index-D2SS6_dL.js";import"./Text-TULuMeKV.js";import"./browser-kLrz4LrJ.js";import"./EmulatedBoldText-g1-xYpae.js";import"./Text-CRjxumht.js";import"./utils-v9anKdvO.js";import"./LoadingSpinner-CZRDoJTo.js";import"./useLocalizedStringFormatter-Cfss7tUo.js";import"./context-DZKv31KF.js";import"./Button-CNQMHeIL.js";import"./ProgressBar-DvublPU5.js";import"./Label-BgYgpH4h.js";import"./Hidden-Bf1cKpiB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DOI1XvOs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DuL0mT4v.js";import"./useFocus-DYgEZHE7.js";import"./useFocusRing-UjyG7JyR.js";import"./useFocusable-BYtFdzHx.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CEjKYc7J.js";import"./useStatic-B47nXigD.js";import"./Overlay-D7P6QU2c.js";import"./Dialog-TYA03L2P.js";import"./RSPContexts-BcFnB_Bf.js";import"./OverlayArrow-DkLbTEcV.js";import"./useControlledState-C9Oc57Yt.js";import"./Collection-B5WxU_Tr.js";import"./CollectionBuilder-5yucyFA6.js";import"./Separator-DvVADXJA.js";import"./Group-UiVaQAL3.js";import"./SearchField-B9KiNtuR.js";import"./FieldError-1hdg8Lt2.js";import"./Form-AqkLdwZK.js";import"./useTextField-COpDxnv4.js";import"./useFormReset-CBR7MSqM.js";import"./TextField-BUvKpsdJ.js";import"./useEvent-CEVQhyLE.js";import"./SelectionManager-BROy-fD_.js";import"./useCollator-uWxVCJwD.js";import"./FocusScope-CHMeNqcW.js";import"./VisuallyHidden-BCmSOm_5.js";import"./DivView-CiQ9KSz5.js";import"./ButtonView-Z2lf81CZ.js";import"./context-D-GsK0VP.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
