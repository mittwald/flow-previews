import{j as r}from"./iframe-Cs4u3jai.js";import{B as o}from"./Button-Djxd_lPT.js";import{A as T}from"./ActionGroup-PzeTeugG.js";import{L as s,a as y}from"./LightBox-Dqggq7az.js";import{I as m}from"./Image-8CkwZ63P.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-0BVBVXS4.js";import{u as w}from"./DialogTriggerView-y3QEF81s.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./Text-BBeTGXmh.js";import"./browser-BbmE0SWg.js";import"./EmulatedBoldText-Wf0lwtn6.js";import"./Text-B7UIaBOw.js";import"./utils-vclj1Qm2.js";import"./LoadingSpinner-C_G5gUEJ.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./context-BvTQ7OVQ.js";import"./Button-x10lnAMQ.js";import"./ProgressBar-BneW9jxU.js";import"./Label-S4RmJPV5.js";import"./Hidden-CdwQ6yqP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGcoVJa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSD3tvTg.js";import"./useFocus-ClAUtHT6.js";import"./useFocusRing-BLMln0L2.js";import"./useFocusable-BN_CcrEu.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Kd7a9PPP.js";import"./useStatic-qxHK3Mia.js";import"./Overlay-BJY4v_1C.js";import"./Dialog-C6Y-YQl5.js";import"./RSPContexts-BOo-h-N-.js";import"./OverlayArrow-BnL8IPkJ.js";import"./useControlledState-D-JQKTrH.js";import"./Collection-Bxbbk1lS.js";import"./CollectionBuilder-DJiQAvza.js";import"./Separator-CA1KhONo.js";import"./Group-Uo6LargV.js";import"./SearchField-AfdpK6Ve.js";import"./FieldError-3wBrWCfg.js";import"./Form-D6x5jYca.js";import"./useTextField-CQf7PcN9.js";import"./useFormReset-u7ab4fFg.js";import"./TextField-Dg5MZqjY.js";import"./useEvent-Cx7qitQN.js";import"./SelectionManager-DjDhbl_H.js";import"./useCollator-BvHyoRqD.js";import"./FocusScope-FJ_dmtXb.js";import"./VisuallyHidden-BT36-Qvg.js";import"./DivView-2GlPpRv_.js";import"./ButtonView-B5GWTC7G.js";import"./context-BVRdILhz.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
