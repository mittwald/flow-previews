import{j as r,r as j}from"./iframe-BqP6npnu.js";import{b as a,u as p,F as d,t as b}from"./Form-D7KFnqtM.js";import{L as t}from"./Label-Dvn9fxen.js";import{R as f,S as h}from"./ResetButton-Br_fJDuM.js";import{B as u}from"./Button-CINxW6TG.js";import{S as E,s as c}from"./Section-BgyjzhPc.js";import{A as S}from"./ActionGroup-DkEZCvBM.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-CfFM0LAi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-S48VUeic.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./context-Dpv25OMu.js";import"./browser-DXN0P2CK.js";import"./utils-Co5LfTVH.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DbZ28gHF.js";import"./remote-CSf0dxK4.js";import"./Text-DywGJIRt.js";import"./EmulatedBoldText-Htc9gLg0.js";import"./LoadingSpinner-C4lBONmO.js";import"./Button-Cqxj8v2u.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./context-WZRL0rNv.js";import"./RSPContexts-DNFW1N-a.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./useStatic-BDpTt2fP.js";import"./Accordion-spl5epLr.js";import"./Alert-DDe2aHVZ.js";import"./AlertIcon-D6OwT7OR.js";import"./AlertBadge-BDjWZOe3.js";import"./Align-DGoxUnnr.js";import"./Popover-weX1_5w_.js";import"./OverlayTrigger-kHGfUlCD.js";import"./TableFooterRow-DE-kA3m3.js";import"./SkeletonText-wjzRGxSG.js";import"./Avatar-CG6X940b.js";import"./AvatarStack-CGiknhkD.js";import"./Badge-CbvcsGSe.js";import"./BigNumber-CbaoHXSC.js";import"./Breadcrumb-Bk12IqNH.js";import"./Link-d1M47Kmn.js";import"./Heading-Dc3wJcTH.js";import"./Legend-CLq0DkHM.js";import"./FileCardList-CMNbaDEr.js";import"./Image-Bzt2Nbsw.js";import"./Color-B6n4dvbc.js";import"./Content-Dz6fNrX7.js";import"./ContextualHelpTrigger-CYLItONs.js";import"./CounterBadge-shrozi75.js";import"./DonutChart-CHPfrUyM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Ccc6Ijre.js";import"./Header-CiylrxZe.js";import"./Initials-Bcwc3vJF.js";import"./InlineCode-BUxkWh74.js";import"./PopoverTrigger-gkUZ0oSI.js";import"./Separator-CATwKm_c.js";import"./Message-D8K-Im88.js";import"./MessageSeparator-DNMph2bZ.js";import"./NavigationGroup-CsN8a96z.js";import"./Notification-Ddl9cNgw.js";import"./NotificationProvider-DI6lihFR.js";import"./ProgressBar-CMJ4ivwe.js";import"./Rating-1epREFBF.js";import"./Skeleton-CfQhGXNU.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
