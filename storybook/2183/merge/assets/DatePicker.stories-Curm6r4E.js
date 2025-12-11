import{j as r,r as j}from"./iframe-DpK2T2Nf.js";import{b as a,u as p,F as d,t as b}from"./Form-CkzEMyZX.js";import{L as t}from"./Label-Dg6bYAOF.js";import{R as f,S as h}from"./ResetButton-CiJw6KVL.js";import{B as u}from"./Button-KfPOVuM-.js";import{S as E,s as c}from"./Section-kGcYQ44e.js";import{A as S}from"./ActionGroup-CLHBsVX4.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-BgQf6oTj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CdnvgWlT.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./context-CrPZXd5J.js";import"./browser-Ckyi0rpL.js";import"./utils-5sSs2C2Q.js";import"./ProgressBar-BP1RROy1.js";import"./Hidden-BSBCwIf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cg4y-Lel.js";import"./remote-Cox__P30.js";import"./Text-ClluuiBD.js";import"./EmulatedBoldText-Bc0AgoG-.js";import"./LoadingSpinner-BQl4MMkz.js";import"./Button--HL08e3g.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./context-CPEq1qsE.js";import"./RSPContexts-7V3qTNb_.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./useStatic-3aliboqk.js";import"./Accordion-AedciLQh.js";import"./Alert-DHDG4MsT.js";import"./AlertIcon-05dXw9V_.js";import"./AlertBadge-CiTXQfnp.js";import"./Align-BSBJJ5zM.js";import"./Popover-BkpsMHU6.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./TableFooterRow-CnVEUuwp.js";import"./SkeletonText-DSV460fR.js";import"./Avatar-BrVjDT-U.js";import"./AvatarStack-45n5MqLA.js";import"./Badge-DcxmWiGs.js";import"./BigNumber-Cq7hcHwo.js";import"./Breadcrumb-B1G9czV2.js";import"./Link-CNUblXN_.js";import"./Heading-CcD2dsF3.js";import"./Legend-CEh7Zw0y.js";import"./FileCardList-vN5JX68X.js";import"./Image-C1ftWFwl.js";import"./Color-DQzo7sAT.js";import"./Content-9dvKA7Z7.js";import"./ContextualHelpTrigger-CBiXLQUX.js";import"./CounterBadge-C-xbOE4o.js";import"./DonutChart-DJ670UUe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCNzeETN.js";import"./Header-eZj9M83o.js";import"./Initials-DhFZ0NCC.js";import"./InlineCode-08Yq6ux1.js";import"./PopoverTrigger-DK96Ugpl.js";import"./Separator-EDbsgt1x.js";import"./Message-C8l33cRQ.js";import"./MessageSeparator-B4es_r1t.js";import"./NavigationGroup-CzqtYd5z.js";import"./Notification-DFv7qa6j.js";import"./NotificationProvider-mo_Pr_YX.js";import"./ProgressBar-COfErnlM.js";import"./Rating-BjEvYZAj.js";import"./Skeleton-Dv7muKa-.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
