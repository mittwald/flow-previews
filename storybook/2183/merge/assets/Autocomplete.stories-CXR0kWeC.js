import{j as r,r as S}from"./iframe-BaRURXeF.js";import{u as c,F as d,t as b,b as h}from"./Form-CWGjihS8.js";import{R as F,S as x}from"./ResetButton-uHNtfVEW.js";import{B as f}from"./Button-BjAgJLRT.js";import{S as E,s as u}from"./Section-CfuTaxA1.js";import{A as T}from"./ActionGroup-BqTo77Ty.js";import{c as i,T as l,g as B,O as y}from"./TimeField-DEmi22Cp.js";import{L as p}from"./Label-CpPOvDoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LiyYElAE.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./context-CYqmZhth.js";import"./browser-CM47kAFn.js";import"./utils-DLb-qyNT.js";import"./IconWarning-G7PHo1OD.js";import"./remote-EuXJkqzN.js";import"./Text-BMdRX-ix.js";import"./EmulatedBoldText-DsXTzWmB.js";import"./LoadingSpinner-BDiYNwtM.js";import"./Button-DbzxAUZp.js";import"./ProgressBar-CbCQbUzb.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./context-CODOobiJ.js";import"./RSPContexts-DmKb4WxY.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./useStatic-CNK9zRwr.js";import"./Accordion-DkBEZ7j6.js";import"./Alert-RHiIiWHO.js";import"./AlertIcon-C9siGvOC.js";import"./AlertBadge-CBeycHMc.js";import"./Align-DsDp8vGU.js";import"./Popover-DoWZP4BQ.js";import"./OverlayTrigger-DFb3iraJ.js";import"./TableFooterRow-BxDD7_XF.js";import"./SkeletonText-Bt_cfZBE.js";import"./Avatar-1SCvSi8v.js";import"./AvatarStack-DuV7PUnh.js";import"./Badge-DRN_LKUg.js";import"./BigNumber-Ci6wTEcF.js";import"./Breadcrumb-Bd90eB5U.js";import"./Link-CWq94S9a.js";import"./Heading-BwlLLsXH.js";import"./Legend-D_JENtdo.js";import"./FileCardList-3twRSReA.js";import"./Image-B_c5xt_D.js";import"./Color-DkHd8LXz.js";import"./Content-XdBLbNrv.js";import"./ContextualHelpTrigger-HbivXqDu.js";import"./CounterBadge-w2O-pKbc.js";import"./DonutChart-ijRk1-wk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dbt83k4-.js";import"./Header-BQdYbaW-.js";import"./Initials-CE2vMNu3.js";import"./InlineCode-CvuJDjkP.js";import"./PopoverTrigger-Brf0WlCq.js";import"./Separator-BCTCUtVH.js";import"./Message-xiisQYm4.js";import"./MessageSeparator-DUGderQ8.js";import"./NavigationGroup-Q3YJa56w.js";import"./Notification-BRKgriQg.js";import"./NotificationProvider-CiuSUFHe.js";import"./ProgressBar-xPSdXL8f.js";import"./Rating-BSWRSES9.js";import"./Skeleton-Cmq3II1T.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
