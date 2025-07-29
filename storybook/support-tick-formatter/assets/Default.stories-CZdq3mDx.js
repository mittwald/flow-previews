import{j as r}from"./iframe-DRNY0HV6.js";import{B as o}from"./Button-B6yc1Izp.js";import{A as T}from"./ActionGroup-CFAB-XEb.js";import{L as s,a as y}from"./LightBox-oql4XC9x.js";import{I as m}from"./Image-BEjzldgH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BbRR4ujq.js";import{u as w}from"./DialogTriggerView-C-I_oZhW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./Text-oBJONlUH.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";import"./Text-laSnJE4K.js";import"./utils-BGYRLt27.js";import"./LoadingSpinner-CWL8TI7G.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./context-wh02hEcl.js";import"./Button-k2MLEVng.js";import"./ProgressBar-Bn7inR-A.js";import"./Label-Ddh_b_TK.js";import"./Hidden-tTaWOvSZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGx8VCK9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CqeZb5V3.js";import"./useFocus-BhLRMKCW.js";import"./useFocusRing-kW39cg4V.js";import"./useFocusable-BSwP4fZ7.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BrLOW8U6.js";import"./useStatic-Kjlf0EN3.js";import"./Overlay-BOCHrYZS.js";import"./Dialog-DNtMkIXU.js";import"./RSPContexts-CA3pTynJ.js";import"./OverlayArrow-p5g0EdPE.js";import"./useControlledState-EC94ILpF.js";import"./Collection-BD7tjUyW.js";import"./CollectionBuilder-DcMhY1Ql.js";import"./Separator-BpqvMMaG.js";import"./Group-BnZVzQNe.js";import"./SearchField-VUEN69Zq.js";import"./FieldError-WemdyPf5.js";import"./Form-DE2ohvFV.js";import"./useTextField-CR9o_0bN.js";import"./useFormReset-CQ99iq-2.js";import"./TextField-Bjv3Nexs.js";import"./useEvent-Bg507xpS.js";import"./SelectionManager-DXHYZg2X.js";import"./useCollator-BrAMHcAl.js";import"./FocusScope-CchoPqp2.js";import"./VisuallyHidden-B4EZo48X.js";import"./DivView-CAoVaoaU.js";import"./ButtonView-DNNO1oTN.js";import"./context-Ceu1foDq.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
