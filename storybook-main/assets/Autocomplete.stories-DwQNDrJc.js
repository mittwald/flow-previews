import{j as r,r as g}from"./iframe-Ye-9ROja.js";import{u as c,F as d,t as b,c as h}from"./Form-CDcLPgOm.js";import{R as F,S as x}from"./ResetButton-CW0DRHg8.js";import{B as f}from"./Button-CSXrQkPS.js";import{S as E}from"./Section-D-jjNbm1.js";import{A as T}from"./ActionGroup-DnXdefyU.js";import{s as u}from"./Action-qygqR_UC.js";import{A as i,T as p,F as B,O as A}from"./Modal-CIEZ1EoF.js";import{L as l}from"./Label-BvzLFnRt.js";import"./index-nuYtCEEu.js";import"./dynamic-1eLzqo0n.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./clsx-B-dksMZM.js";import"./index-MGNRFzGq.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./context-BMOJ7e9i.js";import"./browser-BcPcK0wn.js";import"./utils-CF6YsxS1.js";import"./IconWarning-C5ScV98r.js";import"./Text-Bsxj-TZS.js";import"./EmulatedBoldText-Bx43jLQW.js";import"./LoadingSpinner-BKm3aKU7.js";import"./Button-COBj9UNQ.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./Dialog-DBZH8ijj.js";import"./RSPContexts-CFmCNefB.js";import"./OverlayArrow-D0NjRXEq.js";import"./useControlledState-DL7WEOig.js";import"./Collection-iSYWZ0WM.js";import"./CollectionBuilder-CD94NaG6.js";import"./SelectionIndicator--h8__Bgl.js";import"./Separator-BZhvxbZo.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./useStatic-BBGAeEE_.js";import"./context-CZJE5_Px.js";import"./Popover-01hMVctL.js";import"./OverlayTrigger-7A3ebmst.js";import"./ControlledNotification-D1ICvP0t.js";import"./ClearPropsContextView-P5ekssIx.js";import"./LayoutCard-_NIPig2e.js";import"./Accordion-DVuPPvFm.js";import"./Alert-CoX8Glo_.js";import"./AlertIcon-Cms0_lyO.js";import"./AlertBadge-BwQy8R4I.js";import"./Align-Bd1uPdER.js";import"./TableFooterRow-Cyj24RWE.js";import"./SkeletonText-RU4Lzd3d.js";import"./Avatar-DLiLFqpy.js";import"./AvatarStack-D9A8rmQG.js";import"./Badge-B8DGqMn_.js";import"./BigNumber-BEmRb-dG.js";import"./Breadcrumb-Dc5oH2ha.js";import"./Link-IU6OuunG.js";import"./Heading-ETrbJF6H.js";import"./Legend-CZBMwtAS.js";import"./FileCardList-DAI-YEHv.js";import"./Image-CRqr-it8.js";import"./CodeBlock-C-rPc8wh.js";import"./CopyButton-B5KxU-BY.js";import"./Tooltip-C4AwSevr.js";import"./react-children-utilities-Cr04RBVg.js";import"./Color-B6FpV0Rf.js";import"./Content-J12nk9kF.js";import"./ContextualHelpTrigger-qqmLNRdq.js";import"./CounterBadge-CdQSd7GR.js";import"./DonutChart-CX5CdKNp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BwrNV2W_.js";import"./Header-DfJL-tPQ.js";import"./Initials-BLl46Ac1.js";import"./InlineCode-C6TTos-N.js";import"./LabeledValue-xGe-YROA.js";import"./PopoverTrigger-BdQu_M_u.js";import"./Markdown-CtZ51Y4r.js";import"./Separator-DcDBZH2W.js";import"./Message-333zFq4x.js";import"./MessageSeparator-kJgauZrH.js";import"./NavigationGroup-D_P-cGCp.js";import"./Notification-Menli_O0.js";import"./NotificationProvider-CfYhTdpN.js";import"./ProgressBar-BGyqmigD.js";import"./Rating-DADKnEjj.js";import"./Skeleton-Dc_ys3XA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
