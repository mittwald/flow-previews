import{j as r}from"./iframe-Dg6UnhUn.js";import{B as o}from"./Button-B-eL7j03.js";import{A as T}from"./ActionGroup-jIa9DF7e.js";import{L as m,a as y}from"./LightBox-BrnePDL4.js";import{I as s}from"./Image-BgylQfZm.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-CALSlVTn.js";import{u as w}from"./DialogTriggerView-CrN-7tsJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./Text-Da0TnBkn.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";import"./Text-5OPT84ek.js";import"./utils-CHKT5qD6.js";import"./LoadingSpinner-BkZqXqCL.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./context-Ddln_640.js";import"./Button-D1qjIKes.js";import"./ProgressBar-B038sK4e.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CSavvckB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRsXmFdU.js";import"./useFocus-DIqzHvRL.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DqWqADF-.js";import"./useStatic-VLWdu29U.js";import"./Overlay-BQTcmy5n.js";import"./Dialog-C4HUGQZW.js";import"./RSPContexts-BHb0qNd1.js";import"./OverlayArrow-CkPauhq3.js";import"./useControlledState-BEdG5TcY.js";import"./Collection-BnM07wE2.js";import"./CollectionBuilder-Cj569hxd.js";import"./Separator-DqyAZ2vf.js";import"./Input-BLPNs6ud.js";import"./SearchField-Zy5PsrMr.js";import"./FieldError-CQt-JA7i.js";import"./Form-Dab95gIe.js";import"./Group-BGz2zD2A.js";import"./useTextField-D74XjgWw.js";import"./useFormReset-B8_ofs8-.js";import"./TextField-nXryNZh-.js";import"./SelectionManager-xbG5JbjP.js";import"./useEvent-CUClqzP3.js";import"./useCollator-DFQLuckx.js";import"./FocusScope-DgFR_sU-.js";import"./VisuallyHidden-BBKGK1WU.js";import"./DivView-D0tERSO2.js";import"./ButtonView-cOOKLNQP.js";import"./context--SRER2Sj.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
