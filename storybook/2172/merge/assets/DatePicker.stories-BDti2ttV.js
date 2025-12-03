import{j as r,r as j}from"./iframe-HbHx0dbr.js";import{b as a,u as d,F as p,t as b}from"./Form-MbwGaAJo.js";import{L as t}from"./Label-VVCD1n3I.js";import{R as f,S as h}from"./ResetButton-CU0OPB9N.js";import{B as u}from"./Button-CJvGBAVv.js";import{S as E,s as c}from"./Section-qE36af1s.js";import{A as S}from"./ActionGroup-CSmxA-fN.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-BLEhWuna.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CRi6gEUI.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./context-B1asaoMu.js";import"./browser-CXwhmTUt.js";import"./utils-CsDSVDn1.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPh3xjyu.js";import"./Text-CkAqcx4z.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./context-CWzv3puv.js";import"./RSPContexts-B_V-VNLp.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./Accordion-Cwt2fJuI.js";import"./Alert-CbU_YA_s.js";import"./AlertIcon-C6IAHzWi.js";import"./AlertBadge-fEpk4vNR.js";import"./Align-BAwYX1Nz.js";import"./Popover-CJs7Vohs.js";import"./OverlayTrigger-CSEkhglm.js";import"./TableFooterRow-Dxi7XPrZ.js";import"./SkeletonText-S65PrCT7.js";import"./Avatar-JTrpRsew.js";import"./AvatarStack-CSJDeeUe.js";import"./Badge-CX4hh3lM.js";import"./BigNumber-BJXYLVAq.js";import"./Breadcrumb---Gml5SM.js";import"./Link-COwhy3J8.js";import"./Heading-DMPTZuUQ.js";import"./Legend-BwAXmxEK.js";import"./FileCardList-BbAMywa1.js";import"./Image-BUcGulw7.js";import"./Color-ByIQXf4O.js";import"./Content-C349RzEO.js";import"./ContextualHelpTrigger-BipkOUK_.js";import"./CounterBadge-N87a1HO-.js";import"./DonutChart-BGqYnoyK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-bUnPZbIJ.js";import"./Header-DefiEy2z.js";import"./Initials-Du-nuxgE.js";import"./InlineCode-DJLgs5TT.js";import"./PopoverTrigger-CHVTJqWF.js";import"./Separator-BhsBp5gG.js";import"./Message-C6tvgpf9.js";import"./MessageSeparator-DbNKZGcR.js";import"./NavigationGroup-DC8ViXMv.js";import"./Notification-DEJbziLS.js";import"./NotificationProvider-BOVzW3FW.js";import"./ProgressBar-cZpj8lZD.js";import"./Rating-EYgTbQvW.js";import"./Skeleton-Bn8XpxuJ.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
