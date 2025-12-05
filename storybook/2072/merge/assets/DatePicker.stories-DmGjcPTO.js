import{j as r,r as j}from"./iframe-MIgL3t-o.js";import{b as a,u as d,F as p,t as b}from"./Form-xa0y_dIF.js";import{L as t}from"./Label-DND0p0GF.js";import{R as f,S as h}from"./ResetButton-Dar3knML.js";import{B as u}from"./Button-Bm-VICQC.js";import{S as E,s as c}from"./Section-DSxo8JPS.js";import{A as S}from"./ActionGroup-DbS5du-g.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-BFURGqwq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-T1pzav9P.js";import"./PropsContextProvider-D08VhguK.js";import"./mergeRefs-DFlQ0eaD.js";import"./index-D5QMlcQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D7iWn3FU.js";import"./context-BN8VYe9y.js";import"./browser-ZlggRhGh.js";import"./utils-DBPvjchL.js";import"./ProgressBar-B2x1EXTK.js";import"./Hidden-DewfgLfM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CaixpT4r.js";import"./Text-CBtQMAPT.js";import"./EmulatedBoldText-DS7oXEiE.js";import"./LoadingSpinner-B8Zs_K9s.js";import"./Button-BoUtMxCQ.js";import"./useFocusRing-qMh6fvoq.js";import"./useFocusable-LR8FLvJr.js";import"./context-BpnnESCC.js";import"./RSPContexts-ByAL28zK.js";import"./Collection--DnqN1NB.js";import"./CollectionBuilder-49chxnhy.js";import"./SelectionIndicator-BNvv8rtj.js";import"./Separator-BNhZRG5D.js";import"./useStatic-Drcz9tkt.js";import"./Accordion-7dsQrpkO.js";import"./Alert-DsqqMK6J.js";import"./AlertIcon-Cr2UlT4F.js";import"./AlertBadge-C2q-OhWS.js";import"./Align-Bpq8YyVH.js";import"./Popover-CB28VzMp.js";import"./OverlayTrigger-BTgo3ogI.js";import"./TableFooterRow-1wnszgLS.js";import"./SkeletonText-DSGRe1mp.js";import"./Avatar-COceV_It.js";import"./AvatarStack-B6vmc5su.js";import"./Badge-cRRWToon.js";import"./BigNumber-CK9gyGUq.js";import"./Breadcrumb-Z996jVAQ.js";import"./Link-e4nLwp4o.js";import"./Heading-BGfwvjE9.js";import"./Legend-BggJIFX2.js";import"./FileCardList-C-TQ3fUn.js";import"./Image-DAc7VsOT.js";import"./Color-_UsPKinm.js";import"./Content-6iLmORfW.js";import"./ContextualHelpTrigger-D-Yb9hBa.js";import"./CounterBadge-COZTsGXp.js";import"./DonutChart-DdGv6zP9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcofpUEQ.js";import"./Header-BMcQReSK.js";import"./Initials-Dgf_eP_2.js";import"./InlineCode-CpcRW1dM.js";import"./PopoverTrigger-bsw-s53Z.js";import"./Separator-B-iBVOSO.js";import"./Message-Chhe13yv.js";import"./MessageSeparator-C88ZuTHj.js";import"./NavigationGroup-tZPVhu6S.js";import"./Notification-Dr7sL_d0.js";import"./NotificationProvider-C92LmpC-.js";import"./ProgressBar-84Q58tlo.js";import"./Rating-1xjU0K14.js";import"./Skeleton-Bn9kW_6b.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
