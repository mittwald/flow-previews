import{j as r}from"./iframe-ybIflQI0.js";import{B as o}from"./Button-VpIHCJ_t.js";import{A as T}from"./ActionGroup-gtNG4WDO.js";import{L as s,a as y}from"./LightBox-wErGONul.js";import{I as m}from"./Image-19zqdkmF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-4calfh7J.js";import{u as w}from"./DialogTriggerView-B2JbNUMV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dby21Boo.js";import"./mergeRefs-CrLlo2X9.js";import"./index-DwvqtJ63.js";import"./Text-CrQihJYy.js";import"./browser-BlU6H4Cg.js";import"./EmulatedBoldText-Cg6573Jk.js";import"./Text-BtP71xLD.js";import"./utils-DwLBuKNl.js";import"./LoadingSpinner-DYvsivqr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dy9YCgnm.js";import"./context-D69S0q1x.js";import"./Button-Bsxotqki.js";import"./ProgressBar-BI13LgYi.js";import"./Label-dqzpDUen.js";import"./Hidden-DQD7tqWN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-OuLiew89.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBpVmfp-.js";import"./useFocus-FOKKrJ32.js";import"./useFocusRing-DmeoHCon.js";import"./useFocusable-D9slAbEH.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CImKUmyK.js";import"./useStatic-CBdef3Wq.js";import"./Overlay-DAbCbV4I.js";import"./Dialog-sjXOwmAJ.js";import"./RSPContexts-18Yw4rTl.js";import"./OverlayArrow-D5ITEh8W.js";import"./useControlledState-BVmYQtS6.js";import"./Collection-BzQkilIm.js";import"./CollectionBuilder-CIbJownJ.js";import"./Separator-DelM8Vlp.js";import"./Group-vP_Qg5M8.js";import"./SearchField-CmuGphBb.js";import"./FieldError-C5asJdTF.js";import"./Form-CSA4Adn7.js";import"./useTextField-ClpDCKui.js";import"./useFormReset-B-8-_0w7.js";import"./TextField--sxCbEe1.js";import"./useEvent-BtRl6L9d.js";import"./SelectionManager-BKQdldWX.js";import"./useCollator-D-IRcrcA.js";import"./FocusScope-Ogf1gBEU.js";import"./VisuallyHidden-DZp-AQjS.js";import"./ButtonView-DX46BUi-.js";import"./context-cR8QzHfh.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
