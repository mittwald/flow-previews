import{j as o}from"./iframe-CN4G8qqm.js";import{B as t}from"./Button-Bq80dFyw.js";import{A as f}from"./ActionGroup-CwhBesa8.js";import{O as T}from"./OverlayTrigger-D4cmnJfg.js";import{D as C}from"./DialogTriggerView-TLZVVV6N.js";import{f as G,P as D,N,R as O}from"./PropsContextProvider-4OAE62jj.js";import{O as _}from"./TranslationProvider-D4PNRj4s.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as b,b as F}from"./IconChevronDown-oGa76fM6.js";import{I as W}from"./IconClose-91D_EWrB.js";import{D as u}from"./DivView-BQn3AArf.js";import{B as k}from"./ButtonView-l6waKhmR.js";import{u as B}from"./useOverlayController-CzXHiyE9.js";import{I as l}from"./Image-BNa8uuSD.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-CSUf4bNc.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./Text-0Ubm83r2.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./EmulatedBoldText-moUjmeps.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./remote-DWrodQTa.js";import"./dynamic-D9oGWwUs.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./useStatic-CM9-VZa7.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./Activity-BEbOvIp9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=b("outline","trash","Trash",A),d=r=>o.jsx(F,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(W,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const Eo={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(l,{src:p.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(l,{src:p.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(l,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),o.jsx(s,{children:o.jsx(l,{alt:"Gopher",src:p.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};const qo=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{i as Default,a as WithController,m as WithImageTrigger,c as WithoutFitScreen,qo as __namedExportsOrder,Eo as default};
