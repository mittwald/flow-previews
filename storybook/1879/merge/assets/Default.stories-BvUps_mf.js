import{j as r}from"./iframe-CxaV-_2O.js";import{B as o}from"./Button-4xzDtBTb.js";import{A as T}from"./ActionGroup-BuC4o8V4.js";import{L as s,a as y}from"./LightBox-BKNW-xRB.js";import{I as m}from"./Image-BHdzLWyA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-D1KlvyS5.js";import{u as w}from"./DialogTriggerView-CCYfgzjG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-z-cWY8Dd.js";import"./mergeRefs-C1I7UQxo.js";import"./index-Bv-xhCU8.js";import"./Text-BIjq1xdd.js";import"./browser-DOb4XPLl.js";import"./EmulatedBoldText-Dg2hewFF.js";import"./Text-CkN05LTG.js";import"./utils-DIYfzur0.js";import"./LoadingSpinner-BcxnB7eR.js";import"./useLocalizedStringFormatter-z8DhIEVV.js";import"./context-Cj-dJZ3y.js";import"./Button-CSmp7O-R.js";import"./ProgressBar-B40XscyZ.js";import"./Label-CMom07rS.js";import"./Hidden-ib7KOmtl.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CxTeeGsz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C5E9TJvv.js";import"./useFocus-IPoI70H0.js";import"./useFocusRing-CW_TQqaA.js";import"./useFocusable-Y-_8tCBP.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Gydu4YTC.js";import"./useStatic-BvJkPPln.js";import"./Overlay-BecZzRoj.js";import"./Dialog-BcGIOR88.js";import"./RSPContexts-CEJikpJX.js";import"./OverlayArrow-CSLKLpb3.js";import"./useControlledState-CfXHiewS.js";import"./Collection-CUgqaI6s.js";import"./CollectionBuilder-1JtBbuTz.js";import"./Separator-Cjyqlw0C.js";import"./Group-Iq-x4EK-.js";import"./SearchField-CI94D4yf.js";import"./FieldError-DeYp8bGg.js";import"./Form-Y2IMt8C-.js";import"./useTextField-7uSnsU3k.js";import"./useFormReset-CwuAQO3t.js";import"./TextField-DnRR4HPH.js";import"./useEvent-C38G0Vvw.js";import"./SelectionManager-BNj2TXCV.js";import"./useCollator-CO3LIzeI.js";import"./FocusScope-COp4d16A.js";import"./VisuallyHidden-DPnP-D6J.js";import"./DivView-DSPR3FEg.js";import"./ButtonView-CFzALhP0.js";import"./context-EEeOWra-.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
