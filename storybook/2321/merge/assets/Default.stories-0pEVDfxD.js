import{j as r}from"./iframe-BYq2oLvG.js";import{B as o}from"./Button-DnTJdD84.js";import{A as l}from"./ActionGroup-Dlb7N04a.js";import{L as s,a as d}from"./LightBox-CMRiBOob.js";import{I as m}from"./Image-HzjlkNP7.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-l8NPf1u4.js";import{u as h}from"./useOverlayController-CI4A0ba3.js";import"./flowComponent-DHneW8T1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-Df3o0vPg.js";import"./browser-CRRI-wfh.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Text-BsD4qVoX.js";import"./utils-Da-bhZeG.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./LoadingSpinner-DIcYbI07.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./context-WfyLsYOo.js";import"./remote-SGC31yDV.js";import"./Button-Bk2CF5qa.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CABccGP2.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./dynamic-bmDFV0NR.js";import"./getActionGroupSlot-BbvszDVH.js";import"./useStatic-CVBRAdvz.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./Dialog-DIAje18X.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";import"./context-BgaPAiG2.js";import"./OverlayContextProvider-BMISrNul.js";import"./DialogTriggerView-DeSIkmGk.js";import"./Overlay-D24HTBly.js";import"./DivView-DzdUvx55.js";import"./ButtonView-BKc5Ch31.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Lr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Lr as __namedExportsOrder,fr as default};
