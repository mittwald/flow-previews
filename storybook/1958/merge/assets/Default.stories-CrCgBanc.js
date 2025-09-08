import{j as r}from"./iframe-BAzLYubM.js";import{B as o}from"./Button-DJgbNtOP.js";import{A as T}from"./ActionGroup-EjsA1Fts.js";import{L as s,a as y}from"./LightBox-DmwXsPzc.js";import{I as m}from"./Image-sbJLqYfz.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-C8vW1cGr.js";import{u as w}from"./DialogTriggerView-MnquLDuj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EavNE9If.js";import"./mergeRefs-AgJlHGVQ.js";import"./index-aIHf1-d_.js";import"./Text-CjPbBUZt.js";import"./browser-CzeCNbOa.js";import"./EmulatedBoldText-saOgMaUw.js";import"./Text-BrSTDiHS.js";import"./utils-b3dZQxDg.js";import"./LoadingSpinner-BkZn8ran.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-1HcLORhi.js";import"./context-dTk8Xbgu.js";import"./Button-DEcgbODe.js";import"./ProgressBar-B6A5wRyw.js";import"./Label-uX-YTZhO.js";import"./Hidden-CD1At3_Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Fj3twa-e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DP_wKln7.js";import"./useFocus-DNlriqLN.js";import"./useFocusRing-BpLfAbDy.js";import"./useFocusable-B5cC5QAy.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-wdi100NC.js";import"./useStatic-Ck2rgCkC.js";import"./Overlay-B1oAjTYQ.js";import"./Dialog-CNBL61sA.js";import"./RSPContexts-DL_RbNY6.js";import"./OverlayArrow-DVbPN0at.js";import"./useControlledState-Ca8ITVoa.js";import"./Collection-CQV8aK6u.js";import"./CollectionBuilder-B31VuGbq.js";import"./Separator-CRdY-Wkq.js";import"./Group-C36tMHps.js";import"./SearchField-DJpeDF7e.js";import"./FieldError-CY1AiRgy.js";import"./Form-VFHeLX6B.js";import"./useTextField-9L1zHPzc.js";import"./useFormReset-BLDHXQeI.js";import"./TextField-RDj9bqu6.js";import"./useEvent-zmd_ZeyS.js";import"./SelectionManager-CYYX1vob.js";import"./useCollator-BFbm-Er3.js";import"./FocusScope-Bn06IbqX.js";import"./VisuallyHidden-sQyJVZKI.js";import"./ButtonView-DGAZrxvC.js";import"./context-Cca8XENB.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
