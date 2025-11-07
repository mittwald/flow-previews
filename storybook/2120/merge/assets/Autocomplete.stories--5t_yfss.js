import{j as r,r as g}from"./iframe-C_rr3K7B.js";import{u as c,F as d,t as b,c as h}from"./Form-3eerynkL.js";import{R as F,S as x}from"./ResetButton-4apoh99L.js";import{B as f}from"./Button-DCjyK8f2.js";import{S as E}from"./Section-Bi-R-_iR.js";import{A as T}from"./ActionGroup-DsFsbzBm.js";import{s as u}from"./Action-CIZ0694o.js";import{A as i,T as p,F as B,O as A}from"./Modal-BJ-aQIK6.js";import{L as l}from"./Label-vkrcFW64.js";import"./index-nuYtCEEu.js";import"./dynamic-BFlSKedW.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./clsx-B-dksMZM.js";import"./index-BjYnWwux.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./browser-E0G6tvzo.js";import"./utils-C4h6fUQR.js";import"./IconWarning-DU_TTROa.js";import"./Text-BsSJXbbR.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./LoadingSpinner-CRVrq6rR.js";import"./Button-B3n1VqY_.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./Dialog-YSlPVfGO.js";import"./RSPContexts-zcKIqYdj.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./useStatic-BCUpaw5v.js";import"./context-D3P4luPW.js";import"./Popover-C6S62YvO.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./ControlledNotification-DUF7vXg5.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./LayoutCard-8_hd1wkR.js";import"./Accordion-6HjJt4r7.js";import"./Alert-BSB-fYgU.js";import"./AlertIcon-iBCzN4pZ.js";import"./AlertBadge-DHbgVCiz.js";import"./Align-C5z7nPeq.js";import"./TableFooterRow-DXFd1_i9.js";import"./SkeletonText-DfID-jhr.js";import"./Avatar-BOkLjthK.js";import"./AvatarStack-CO_AH2VC.js";import"./Badge-C80oNvTr.js";import"./BigNumber-B_HOaw1W.js";import"./Breadcrumb-C4lBjv75.js";import"./Link-RtgN4cbU.js";import"./Heading-zxknCt_n.js";import"./Legend-Cfy0QGqD.js";import"./FileCardList-UHBGSkAH.js";import"./Image-D6oez4WD.js";import"./CodeBlock-XVb8pDFG.js";import"./CopyButton-ClrMNUuq.js";import"./Tooltip-GUcZ5Baq.js";import"./react-children-utilities-DT9uJVie.js";import"./Color-PNql-Ck2.js";import"./Content-RrSqeXWH.js";import"./ContextualHelpTrigger-Cf4bGUz3.js";import"./CounterBadge-CiLO3wd7.js";import"./DonutChart-BMa5iWRZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCbHKh1j.js";import"./Header-BW42WVk0.js";import"./Initials-CjZUsWxi.js";import"./InlineCode-DkUomSPt.js";import"./LabeledValue-CDQ_6OLg.js";import"./PopoverTrigger-BmTXQmKy.js";import"./Markdown-BGldsMFH.js";import"./Separator-BXsRa8Lp.js";import"./Message-BzZ2-vNa.js";import"./MessageSeparator-slNvzfna.js";import"./NavigationGroup-Ch7Q2DeX.js";import"./Notification-BtUIO_Xq.js";import"./NotificationProvider-Buvl5LDa.js";import"./ProgressBar-Ck_QTNWr.js";import"./Rating-CNdcbfDe.js";import"./Skeleton-7WPy-KOc.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const lt=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,s as WithFocus,lt as __namedExportsOrder,pt as default};
