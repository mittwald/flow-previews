import{j as r}from"./iframe-D6MXtoeF.js";import{B as o}from"./Button-Cps8fs86.js";import{A as T}from"./ActionGroup-Bzgw348M.js";import{L as s,a as y}from"./LightBox-ByPaUBan.js";import{I as m}from"./Image-BbmKQdsP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BzCByWga.js";import{u as w}from"./DialogTriggerView-naeHwBCH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./Text-BFMh0nyW.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";import"./Text-X88WQLD_.js";import"./utils-B7M3k9FN.js";import"./LoadingSpinner-BP-swr7r.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./context-Ck2zuvqd.js";import"./Button-QOiUMIUW.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D8eXzRI6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ct6Wvp4V.js";import"./useFocus-DFkM6utj.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./useStatic-BOJiZlFD.js";import"./Overlay-ltqzearn.js";import"./Dialog-DTX65kLp.js";import"./RSPContexts-DRsXlI21.js";import"./OverlayArrow-DzYaWuxq.js";import"./useControlledState-CXEx0L1H.js";import"./Collection-Cv5VHUKE.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Separator-DFJzdh8J.js";import"./Group-DIpddcx2.js";import"./SearchField-BsFidkN3.js";import"./FieldError-DNUFoHGF.js";import"./Form-DWnjCikM.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./TextField-D8-3KKgU.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./useCollator-K4h4KKi7.js";import"./FocusScope-NXX1qwdY.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./ButtonView-CEOkq3b0.js";import"./context-0wOjLTza.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
