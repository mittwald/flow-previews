import{j as r,r as f}from"./iframe-7JAb-nDd.js";import{c as p,u as a,F as c,t as j}from"./Form-CTxPFoJk.js";import{L as t}from"./Label-Cq-3tAPE.js";import{R as u,S as F}from"./ResetButton-D7Dwgqv2.js";import{B as l}from"./Button-C274DNXY.js";import{S as b,s as d}from"./Section--2nSNqYe.js";import{A as E}from"./ActionGroup-BD30m3yb.js";import{as as S,ar as o,g as T}from"./TimeField-CNjMofKD.js";import"./index-nuYtCEEu.js";import"./dynamic-DAEQlq7s.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./context-DufoU_2Q.js";import"./browser-ES8JYesh.js";import"./utils-COcVuwM3.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CrvOn5qf.js";import"./Text-Cjgg9Pe-.js";import"./EmulatedBoldText-DX6Otmj0.js";import"./LoadingSpinner-Ds95wBE7.js";import"./Button-CcXbzio8.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./context-49irLi2e.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./useStatic-BMWFl-h1.js";import"./getActionGroupSlot-o5MzPqMr.js";import"./Accordion-DYtLRAos.js";import"./Alert-CLiUa977.js";import"./AlertIcon-WJ9tZl6s.js";import"./AlertBadge-AOM4FSHZ.js";import"./Align-B0gCmpdf.js";import"./Popover-BcXGNCBW.js";import"./OverlayTrigger-DS9RFxPY.js";import"./TableFooterRow-ZODofEH1.js";import"./SkeletonText-B9c0QkCc.js";import"./Avatar-6DFit7Ya.js";import"./AvatarStack-4AL_jxUF.js";import"./Badge-B1Y6ruys.js";import"./BigNumber-NgHYAh3A.js";import"./Breadcrumb-DOyzkWnN.js";import"./Link-Do3eIhQO.js";import"./Heading-CHzNLXxT.js";import"./Legend-CZxHGHa6.js";import"./FileCardList-CFeSPxGX.js";import"./Image-CFjkhrGB.js";import"./Color-xIgWNHiv.js";import"./Content-Dg81XJRV.js";import"./ContextualHelpTrigger-7crKzglp.js";import"./CounterBadge-CLW5yjQ7.js";import"./DonutChart-C7E8doOb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIdJbZ8G.js";import"./Header-DkLINSGj.js";import"./Initials-DCYS7rJh.js";import"./InlineCode-DdWzKy44.js";import"./PopoverTrigger-BiiRixsv.js";import"./Separator-DvBTZY_D.js";import"./Message-jmWJmgsi.js";import"./MessageSeparator-dTBBbTVG.js";import"./NavigationGroup-BQQpe8Hu.js";import"./Notification-CAeZO54P.js";import"./NotificationProvider-Cquom2kb.js";import"./ProgressBar-CEJMgPBt.js";import"./Rating-Bg1reZHS.js";import"./Skeleton-DiJUmzB6.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async x=>{await d(1500),B(x)},h=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
