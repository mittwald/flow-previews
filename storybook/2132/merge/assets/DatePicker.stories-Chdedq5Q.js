import{j as r,r as j}from"./iframe-N2ZMMBua.js";import{c as a,u as p,F as d,t as b}from"./Form-BQLLcX8A.js";import{L as t}from"./Label-CNIsCRQn.js";import{R as f,S as h}from"./ResetButton-CjjJ6zfo.js";import{B as u}from"./Button-CQTX7C-7.js";import{S as E,s as c}from"./Section-Dlm8T0mZ.js";import{A as S}from"./ActionGroup-CcC1RkNL.js";import{E as l,D as o,$ as D,G as g,g as B}from"./TimeField-Ce_qBq4J.js";import"./index-nuYtCEEu.js";import"./dynamic-Bg49ug6j.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./context-CVOB-S2d.js";import"./browser-C3uOmI6O.js";import"./utils-UqP59DSc.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BFO_JV1T.js";import"./Text-B0nKVVvA.js";import"./EmulatedBoldText-zrEG-jWJ.js";import"./LoadingSpinner-BF2HGxsW.js";import"./Button-ckJwL_Qm.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./context-0hb6Imhj.js";import"./RSPContexts-W5rfe12r.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./useStatic-BK7FFX-B.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./Accordion-Cx7YOjK-.js";import"./Alert-C4x5XvaN.js";import"./AlertIcon-DP3sd6M_.js";import"./AlertBadge-CCMWeYGv.js";import"./Align-Ds9Q2xSR.js";import"./Popover-ITKHSPMr.js";import"./OverlayTrigger-CtrEPdBT.js";import"./TableFooterRow-BSMhJEWV.js";import"./SkeletonText-C0dZ71Dc.js";import"./Avatar-UT9YFCej.js";import"./AvatarStack-DTzcVfX5.js";import"./Badge-CmQdROSx.js";import"./BigNumber-BpYjVhMM.js";import"./Breadcrumb-BU79UJRj.js";import"./Link-DGEEGfY5.js";import"./Heading-UwbM-u6i.js";import"./Legend-DPTWJJT_.js";import"./FileCardList-BFe4Um8S.js";import"./Image-c560F83g.js";import"./Color-g_oGdWKO.js";import"./Content-DKIO4hDm.js";import"./ContextualHelpTrigger-MtOPALsd.js";import"./CounterBadge-CnoO7JzY.js";import"./DonutChart-D5hSwyhh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C92wbj0P.js";import"./Header-BplYHpBk.js";import"./Initials-1nVpomP1.js";import"./InlineCode-B0WCYRLN.js";import"./PopoverTrigger-DLnLI4gj.js";import"./Separator-DrFjGgJ9.js";import"./Message-CzM_qt2p.js";import"./MessageSeparator-khAvmqi6.js";import"./NavigationGroup-p6nb8hAj.js";import"./Notification-DLP1k1dH.js";import"./NotificationProvider-VEcgpjyi.js";import"./ProgressBar-Dgh4xYdk.js";import"./Rating-CceFiRCw.js";import"./Skeleton-CkbNl4QS.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(g()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
