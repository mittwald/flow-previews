import{j as r}from"./iframe-Dx9XfaX_.js";import{B as o}from"./Button-MatbmytM.js";import{A as T}from"./ActionGroup-COGCgrLS.js";import{L as s,a as y}from"./LightBox-D_PvMN3b.js";import{I as m}from"./Image-CXI-kmyC.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BYDskjWX.js";import{u as w}from"./DialogTriggerView-DV5TVcRN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DO4Dnyvq.js";import"./mergeRefs-Do6vvZAc.js";import"./index-BXqdq2Ma.js";import"./Text-DiCJ_7I6.js";import"./browser-vROwQYx1.js";import"./EmulatedBoldText-Bd1dp7Af.js";import"./Text-8Az0PCun.js";import"./utils-CRV-JyXd.js";import"./LoadingSpinner-CnF3-Zd6.js";import"./useLocalizedStringFormatter-DXL8o4sQ.js";import"./context-CaqfYy9P.js";import"./Button-DbcQ2aGW.js";import"./ProgressBar-CsQvJS_j.js";import"./Label-DwfrzMrM.js";import"./Hidden-Cf6kyMxF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B5pgN2NU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA1KERpG.js";import"./useFocus-5jQbhqKe.js";import"./useFocusRing-Dq63eQZe.js";import"./useFocusable-B_6jRB6i.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B_y_2xMg.js";import"./useStatic-B-mnmZm1.js";import"./Overlay-Cl9KIoMn.js";import"./Dialog-wXYbJuwK.js";import"./RSPContexts-C2UEl3bJ.js";import"./OverlayArrow-BvGktdbH.js";import"./useControlledState-B-pjTNcE.js";import"./Collection-DIxctTuu.js";import"./CollectionBuilder-Bwrs6onG.js";import"./Separator-DPSNb7Zj.js";import"./Group-DNiybGdz.js";import"./SearchField-HH6yUbMg.js";import"./FieldError-DljPEn2l.js";import"./Form-DItLtMsi.js";import"./useTextField-utlMkyTR.js";import"./useFormReset-CJtNuDui.js";import"./TextField-C-GKv5_s.js";import"./useEvent-DGEo5c64.js";import"./SelectionManager-Dr9cLJlV.js";import"./useCollator-BpkBnSqV.js";import"./FocusScope-eWFX0WV3.js";import"./VisuallyHidden-BktHc-NH.js";import"./DivView-D6SVmuSW.js";import"./ButtonView-D2U0ne_Q.js";import"./context-CC-SH_Jq.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
