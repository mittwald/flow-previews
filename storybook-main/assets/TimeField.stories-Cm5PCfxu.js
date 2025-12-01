import{j as r,r as f}from"./iframe-2LgrIkRd.js";import{b as a,u as p,F as d,t as j}from"./Form-D82Xz59o.js";import{L as t}from"./Label-DREYQWel.js";import{R as u,S as F}from"./ResetButton-BHcgh5P3.js";import{B as l}from"./Button-Cq_XMZKZ.js";import{S as b,s as c}from"./Section-BlB_8KjT.js";import{A as E}from"./ActionGroup-ByO56kJD.js";import{as as S,ar as o,g as T}from"./TimeField-D5pHgFYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DCrPXVv3.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./context-CE6tX24V.js";import"./browser-DE_neHhx.js";import"./utils-BnxtooML.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D60ymTiJ.js";import"./Text-CmoFb8XW.js";import"./EmulatedBoldText-DybYTyQs.js";import"./LoadingSpinner-C9JNq8vi.js";import"./Button-EKWPB4tZ.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./context-lHzLNF7G.js";import"./RSPContexts-Dor-CtSJ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./useStatic-yAY0kCCB.js";import"./Accordion-CyEZGz5t.js";import"./Alert-fpXXpeEV.js";import"./AlertIcon-5TMA0R6D.js";import"./AlertBadge-DD7luv0F.js";import"./Align-C4SFZ7ME.js";import"./Popover-BsRqhSlP.js";import"./OverlayTrigger-CbpE00TN.js";import"./TableFooterRow-CUlgLSqo.js";import"./SkeletonText-BGsYoe3X.js";import"./Avatar-C4UmcXDE.js";import"./AvatarStack-B-BstC3Q.js";import"./Badge-BgCXtZ0L.js";import"./BigNumber-CVZSlJts.js";import"./Breadcrumb-C_L5ewoM.js";import"./Link-BdaxMzeJ.js";import"./Heading-DilTAoZJ.js";import"./Legend-fylTc-bA.js";import"./FileCardList-CrJP7G2S.js";import"./Image-OXpu_gFV.js";import"./Color-BYYxr454.js";import"./Content-NoHT_5O2.js";import"./ContextualHelpTrigger-TtfataTj.js";import"./CounterBadge-CFnk4a6U.js";import"./DonutChart-DInnhXKC.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-S15YJh2T.js";import"./Header-DRDABVjU.js";import"./Initials-CWWZSIcH.js";import"./InlineCode-FHoqqrut.js";import"./PopoverTrigger-Cj-rCTR6.js";import"./Separator-Bqiy7SnE.js";import"./Message-cn2BI7mT.js";import"./MessageSeparator-CfbbRyt-.js";import"./NavigationGroup-DuKvOMC6.js";import"./Notification-BGXUVOCQ.js";import"./NotificationProvider-Cexjnfj1.js";import"./ProgressBar-D0rsyG47.js";import"./Rating-IUsLANbY.js";import"./Skeleton-TGcUA8kF.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
