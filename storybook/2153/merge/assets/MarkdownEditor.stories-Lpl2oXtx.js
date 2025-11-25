import{j as r,r as x}from"./iframe-CN4WTwYv.js";import{b as m,u as a,F as d,t as E}from"./Form-C5WmNT0c.js";import{L as s}from"./Label-BRmwvfXT.js";import{R as c,S as f}from"./ResetButton-6fmp_2Jb.js";import{B as u}from"./Button-DKV_rJZ0.js";import{S as j,s as p}from"./Section-ChtzXzqR.js";import{A as b}from"./ActionGroup-DyQk2EE1.js";import{t as n,F as g}from"./Modal-JtS1GCqs.js";import"./index-nuYtCEEu.js";import"./dynamic-B0RnxgZh.js";import"./flowComponent-DKJqWTmA.js";import"./index-BzOdNhte.js";import"./clsx-B-dksMZM.js";import"./index-NeY_xEz-.js";import"./useLocalizedStringFormatter-CTHVjSGk.js";import"./context-WZFoFUL5.js";import"./browser-CybO_GX9.js";import"./utils-dijpHYHY.js";import"./ProgressBar-BPzw3REr.js";import"./Hidden-BZs9FL3y.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-OOGKEFPc.js";import"./Text-CuaHEgKJ.js";import"./EmulatedBoldText-D_eW2liq.js";import"./LoadingSpinner-pxkgsSpr.js";import"./Button-ABhPpFMV.js";import"./useFocusRing-BwoDdEBQ.js";import"./useFocusable-CuBMSLKI.js";import"./context-D5Q2rEdS.js";import"./RSPContexts-qFT5nqOw.js";import"./Collection-_B8J5S67.js";import"./CollectionBuilder-BScyvG_s.js";import"./SelectionIndicator-BD_RUCQf.js";import"./Separator-HWaNsUvC.js";import"./useStatic-B_XtSJ-Q.js";import"./FileCardList-B7y733ft.js";import"./Avatar-DUVggXrd.js";import"./AlertIcon-CK_ZHrhI.js";import"./Image-sLmDF6h6.js";import"./Link-BWI3Ij3P.js";import"./ControlledNotification-B4SeTnx9.js";import"./Flex-CdYYO_HZ.js";import"./Accordion-DTfzyVKJ.js";import"./Alert-D1kyjDat.js";import"./AlertBadge-vMsaaONk.js";import"./Align-CuYESgtx.js";import"./AvatarStack-DqNBCzbY.js";import"./BigNumber-Cmue7ZKp.js";import"./Breadcrumb-DD6fnOqx.js";import"./Heading-BxJhHPjy.js";import"./Legend-CvwACQxn.js";import"./Color-UdZqV4-Q.js";import"./TableFooterRow-CtEJIn2Q.js";import"./SkeletonText-CEwNi-L-.js";import"./Content-Bb2nt3RH.js";import"./CounterBadge-DqyLtEIg.js";import"./DonutChart-BRPZRgK_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-e6fNnZwM.js";import"./Header-BVqKPdhQ.js";import"./Initials-C__jbqKP.js";import"./InlineCode-BLOKlvTP.js";import"./LayoutCard-BjkzdleE.js";import"./Separator-altoXYC_.js";import"./MessageSeparator-DzKM339D.js";import"./NavigationGroup-Ry0FrTf6.js";import"./Notification-CJdFBvUm.js";import"./NotificationProvider-CD_MO59g.js";import"./ProgressBar-ktu-Gi_7.js";import"./Rating-c-hlPqMh.js";import"./Skeleton-D5vx8POd.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},l=a({defaultValues:{user:""}}),h=E();return console.log(l.watch("user")),r.jsx(d,{form:l,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
