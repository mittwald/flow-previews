import{j as r,r as j}from"./iframe-Cir6MTA5.js";import{b as a,u as d,F as p,t as b}from"./Form-DKkjhGjg.js";import{L as t}from"./Label-CD63mnMj.js";import{R as f,S as h}from"./ResetButton-DDMtMKHg.js";import{B as u}from"./Button-C2A0kxO-.js";import{S as E,s as c}from"./Section-CsBFEvqK.js";import{A as S}from"./ActionGroup-CQUlrc02.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-C03E55-6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C54c6iDK.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./context-DCFpjcCd.js";import"./browser-DYyRc_is.js";import"./utils-D3-KZmBM.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DBAWKFVr.js";import"./Text-NWoOtLYD.js";import"./EmulatedBoldText-CMuEkZzQ.js";import"./LoadingSpinner-Cbn--oub.js";import"./Button-CVO9gXsi.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./context-uB_U-Ll-.js";import"./RSPContexts-DBL9OuDo.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./useStatic-lrFYKeJo.js";import"./Accordion--LccsWdU.js";import"./Alert-Cwf4c51S.js";import"./AlertIcon-THsOUfa2.js";import"./AlertBadge-DQEistgl.js";import"./Align-CbiGC6Hm.js";import"./Popover-BnMf836y.js";import"./OverlayTrigger-D8wWf3qw.js";import"./TableFooterRow-Bn7VMJfM.js";import"./SkeletonText-BA7fTM6y.js";import"./Avatar-D1LE7OHQ.js";import"./AvatarStack-BjHAHFtd.js";import"./Badge-Dhmh7ReA.js";import"./BigNumber-Bdldp5Vs.js";import"./Breadcrumb-BgYb3jvA.js";import"./Link-DL2nVgdW.js";import"./Heading-C81Sjkat.js";import"./Legend-DNzEDg1V.js";import"./FileCardList-CdiBIUzb.js";import"./Image-Bmzle01D.js";import"./Color-DwuvilaM.js";import"./Content-sj2198_-.js";import"./ContextualHelpTrigger-Sr6lf3NJ.js";import"./CounterBadge-Blil8ag9.js";import"./DonutChart-CdK4877Z.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BjZ4vO5b.js";import"./Header-BqKpe2dR.js";import"./Initials-DaUoDTnU.js";import"./InlineCode-BDWrnhvQ.js";import"./PopoverTrigger-BDtzPLEN.js";import"./Separator-DYtvdLSf.js";import"./Message-BEPzM24B.js";import"./MessageSeparator-DCUCvEOC.js";import"./NavigationGroup-BZDK6UKv.js";import"./Notification-CZZ3xhm4.js";import"./NotificationProvider-DrRbbE28.js";import"./ProgressBar-DTjakmLk.js";import"./Rating-C6rR6C1R.js";import"./Skeleton-By5OXPEA.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
