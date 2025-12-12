import{j as r,r as S}from"./iframe-DEcBxJMv.js";import{u as c,F as d,t as b,b as h}from"./Form-BWEAk-wT.js";import{R as F,S as x}from"./ResetButton-DEcSG1p7.js";import{B as f}from"./Button-SrFk_XSt.js";import{S as E,s as u}from"./Section-DBHphcZQ.js";import{A as T}from"./ActionGroup-DvFbVXMb.js";import{c as i,T as l,g as B,O as y}from"./TimeField-Dm82K8tp.js";import{L as p}from"./Label-DKovwxNh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BupQFwyZ.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./context-CCmXnIub.js";import"./browser-BXvtU8ie.js";import"./utils-UdYzeLBf.js";import"./IconWarning-BC7HEquB.js";import"./remote-DoDHjwnJ.js";import"./Text-BBAymND1.js";import"./EmulatedBoldText-CK8KF88J.js";import"./LoadingSpinner-BVhceB8v.js";import"./Button-BxMepmz1.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./context-font-zWS.js";import"./RSPContexts-WhR4y82c.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./useStatic-BAiSxx7G.js";import"./Accordion-BLxSKLD2.js";import"./Alert-Bj8aMttH.js";import"./AlertIcon-B311quy6.js";import"./AlertBadge-DgPHrTJs.js";import"./Align-DJzhUqNo.js";import"./Popover-C7mJHuVQ.js";import"./OverlayTrigger-u_RpKHc5.js";import"./TableFooterRow-C_lpJ_Ld.js";import"./SkeletonText-DAnNzdg5.js";import"./Avatar-bYuIu1Zy.js";import"./AvatarStack-DTmDz1dE.js";import"./Badge-bbz8daB-.js";import"./BigNumber-BlHVGSpu.js";import"./Breadcrumb-GNNk4mVy.js";import"./Link-CPvKToX3.js";import"./Heading-DVq-3Nns.js";import"./Legend-C5yWylkj.js";import"./FileCardList-Bi3qt08T.js";import"./Image-CcShDLXX.js";import"./Color-B19feJBC.js";import"./Content-ClXCVH_y.js";import"./ContextualHelpTrigger-PNpDQr7A.js";import"./CounterBadge-BITuIXzG.js";import"./DonutChart-DfevOAtY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cw2rsL0x.js";import"./Header-DifY7CnZ.js";import"./Initials-TsKejgdG.js";import"./InlineCode-BkoHhJoS.js";import"./PopoverTrigger-BYjVsibp.js";import"./Separator-Cmo-OklH.js";import"./Message-Dzzvnonj.js";import"./MessageSeparator-DMvMYf8R.js";import"./NavigationGroup-DIvfJjdh.js";import"./Notification-DUi0yP4R.js";import"./NotificationProvider-Qm9FlLcY.js";import"./ProgressBar-ULT9xIn5.js";import"./Rating-C0VI3x7Z.js";import"./Skeleton-B3H61kIa.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,zr as default};
