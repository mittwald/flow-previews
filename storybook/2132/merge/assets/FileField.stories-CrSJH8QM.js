import{j as r,r as x}from"./iframe-7JAb-nDd.js";import{c as l,u as a,F as c,t as j}from"./Form-CTxPFoJk.js";import{L as s}from"./Label-Cq-3tAPE.js";import{R as u,S as d}from"./ResetButton-D7Dwgqv2.js";import{B as t}from"./Button-C274DNXY.js";import{S,s as p}from"./Section--2nSNqYe.js";import{A as b}from"./ActionGroup-BD30m3yb.js";import{r as m,g as B}from"./TimeField-CNjMofKD.js";import"./index-nuYtCEEu.js";import"./dynamic-DAEQlq7s.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./context-DufoU_2Q.js";import"./browser-ES8JYesh.js";import"./utils-COcVuwM3.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CrvOn5qf.js";import"./Text-Cjgg9Pe-.js";import"./EmulatedBoldText-DX6Otmj0.js";import"./LoadingSpinner-Ds95wBE7.js";import"./Button-CcXbzio8.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./context-49irLi2e.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./useStatic-BMWFl-h1.js";import"./getActionGroupSlot-o5MzPqMr.js";import"./Accordion-DYtLRAos.js";import"./Alert-CLiUa977.js";import"./AlertIcon-WJ9tZl6s.js";import"./AlertBadge-AOM4FSHZ.js";import"./Align-B0gCmpdf.js";import"./Popover-BcXGNCBW.js";import"./OverlayTrigger-DS9RFxPY.js";import"./TableFooterRow-ZODofEH1.js";import"./SkeletonText-B9c0QkCc.js";import"./Avatar-6DFit7Ya.js";import"./AvatarStack-4AL_jxUF.js";import"./Badge-B1Y6ruys.js";import"./BigNumber-NgHYAh3A.js";import"./Breadcrumb-DOyzkWnN.js";import"./Link-Do3eIhQO.js";import"./Heading-CHzNLXxT.js";import"./Legend-CZxHGHa6.js";import"./FileCardList-CFeSPxGX.js";import"./Image-CFjkhrGB.js";import"./Color-xIgWNHiv.js";import"./Content-Dg81XJRV.js";import"./ContextualHelpTrigger-7crKzglp.js";import"./CounterBadge-CLW5yjQ7.js";import"./DonutChart-C7E8doOb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIdJbZ8G.js";import"./Header-DkLINSGj.js";import"./Initials-DCYS7rJh.js";import"./InlineCode-DdWzKy44.js";import"./PopoverTrigger-BiiRixsv.js";import"./Separator-DvBTZY_D.js";import"./Message-jmWJmgsi.js";import"./MessageSeparator-dTBBbTVG.js";import"./NavigationGroup-BQQpe8Hu.js";import"./Notification-CAeZO54P.js";import"./NotificationProvider-Cquom2kb.js";import"./ProgressBar-CEJMgPBt.js";import"./Rating-Bg1reZHS.js";import"./Skeleton-DiJUmzB6.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Nr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ur as __namedExportsOrder,Nr as default};
