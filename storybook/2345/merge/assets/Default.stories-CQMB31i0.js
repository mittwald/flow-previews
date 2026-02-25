import{j as r}from"./iframe-CAK8FS83.js";import{B as o}from"./Button-itgufTCs.js";import{A as l}from"./ActionGroup-DOh7AJi0.js";import{L as s,a as d}from"./LightBox-DQzq9sgq.js";import{I as m}from"./Image-BdrX5oKW.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-EFpx-Gs1.js";import"./flowComponent-BWp16SNy.js";import{u as h}from"./useOverlayController-Cgn9MX8W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DLuRhlhH.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./utils-th26LVD6.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./LoadingSpinner-BC7xHqe0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./remote-BiZ00o_J.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./dynamic-D8OXR4zz.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./useStatic-CRQBoMuN.js";import"./OverlayTrigger-YvJHasJp.js";import"./Dialog-Bg78UE4C.js";import"./RSPContexts-B_v10Iug.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./DialogTriggerView-DCUkf_nh.js";import"./Overlay-oKaaxmZR.js";import"./ButtonView-LoZK7xQ_.js";const Br={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...n.parameters?.docs?.source}}};const jr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,jr as __namedExportsOrder,Br as default};
