import{j as r}from"./iframe-DwZ8STeX.js";import{B as o}from"./Button-DviFkjeq.js";import{A as T}from"./ActionGroup-CghJCTXs.js";import{L as s,a as y}from"./LightBox-CTteEPaQ.js";import{I as m}from"./Image-D2YGQwzy.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as G,a6 as O}from"./IconWarning-dtP1FcGg.js";import{u as w}from"./useOverlayController-D87w5C3N.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./Text-O3JAN1OQ.js";import"./browser-DDdNHtRK.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./Text-BcrniBgV.js";import"./utils-7Pnsuj4A.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./dynamic-DhSxKtV5.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./OverlayTrigger-DRZrZrYn.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./ControlledNotification-D5rYnObm.js";import"./context-DCjwncLb.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./DialogTriggerView-CM6tCBPY.js";import"./Overlay-DFg_1h6a.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./ButtonView-B80wrKf2.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
