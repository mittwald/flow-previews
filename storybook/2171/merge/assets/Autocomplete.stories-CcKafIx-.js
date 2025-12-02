import{j as r,r as S}from"./iframe-CkaLytcH.js";import{u as c,F as d,t as b,b as h}from"./Form-DT0yO1QW.js";import{R as F,S as x}from"./ResetButton-DN2nIo5J.js";import{B as f}from"./Button-CNnlz4DJ.js";import{S as E,s as u}from"./Section-D3xKxzs1.js";import{A as T}from"./ActionGroup-CAlgHOw9.js";import{c as i,T as l,g as B,O as y}from"./TimeField-CD_1Cvsc.js";import{L as p}from"./Label-C12WmE73.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CuWqRT77.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./context-BgsgCuSf.js";import"./browser-BGuPTbio.js";import"./utils-Cx1NHB3m.js";import"./IconWarning-at2C7kXG.js";import"./Text-tzLzAj2U.js";import"./EmulatedBoldText-ChGTtZfs.js";import"./LoadingSpinner-B6kRnXp7.js";import"./Button-6wBbL84E.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./context-C49kt-dL.js";import"./RSPContexts-DGlCkRo9.js";import"./Collection-G136PDCR.js";import"./CollectionBuilder-D5yy7zsb.js";import"./SelectionIndicator-C6-uo9TF.js";import"./Separator-BUQgzvoO.js";import"./useStatic-CwKwrY2l.js";import"./Accordion-O8KQNDhm.js";import"./Alert-Cn90v1OP.js";import"./AlertIcon-C1KERsp1.js";import"./AlertBadge-EOMQWw9S.js";import"./Align-B8YLISN9.js";import"./Popover-O-ijI_rS.js";import"./OverlayTrigger-BAlGpEF-.js";import"./TableFooterRow-DTIDyRXC.js";import"./SkeletonText-BvetQVDs.js";import"./Avatar-D0TiQ1yF.js";import"./AvatarStack-D2_NoW2F.js";import"./Badge-BPLvzjro.js";import"./BigNumber-PI7ivuk4.js";import"./Breadcrumb-Cz8sITnV.js";import"./Link-Ch1hHAdK.js";import"./Heading-CDNPJ0iR.js";import"./Legend-D7Hlt0lN.js";import"./FileCardList-DbMTg1eZ.js";import"./Image-B4WOffmQ.js";import"./Color-Bv30AifR.js";import"./Content-CDQlrVSe.js";import"./ContextualHelpTrigger-O6xxa11A.js";import"./CounterBadge-BkFZCkUW.js";import"./DonutChart-CyfbjEIy.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcaWbFCQ.js";import"./Header-CYrnS-JX.js";import"./Initials-o8TldnRX.js";import"./InlineCode-BSZBkh4R.js";import"./PopoverTrigger-DdiRrf85.js";import"./Separator-Bbi4YrrB.js";import"./Message-DaqEjKEm.js";import"./MessageSeparator-B31U0QQH.js";import"./NavigationGroup-CORL8hsO.js";import"./Notification-BilvgaaS.js";import"./NotificationProvider-CEjHGY9X.js";import"./ProgressBar-J82fOLhc.js";import"./Rating-JgrMmlzu.js";import"./Skeleton-DIhE6pV7.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,zr as __namedExportsOrder,Yr as default};
