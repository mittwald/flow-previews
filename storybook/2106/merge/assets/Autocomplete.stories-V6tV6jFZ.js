import{j as r,r as j}from"./iframe-DxwcgvDR.js";import{u as d,F as u,t as g,a as h}from"./Form-Bi2nb_yB.js";import{B as i}from"./Button-DpmT-Qin.js";import{S as b}from"./Section-DfeGZtyD.js";import{A as E}from"./ActionGroup-DAojqoGf.js";import{s as f}from"./Action-BFncm_Jw.js";import{A as m,T as l,F as S,O as T}from"./Modal-mu59XSsR.js";import{L as a}from"./Label-CnQsfVTv.js";import"./index-nuYtCEEu.js";import"./dynamic-BXIRoUAY.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./clsx-B-dksMZM.js";import"./index-BbnRfAJ3.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./context-CGBA4dD2.js";import"./browser-Cqe1LxfT.js";import"./utils-n6_FFOiQ.js";import"./IconWarning-CXkzDcrG.js";import"./Text-0mdbe7by.js";import"./EmulatedBoldText-Bkaq8qYh.js";import"./LoadingSpinner-BQdOHNHu.js";import"./Button-DnBmTQ11.js";import"./ProgressBar-BcO4kXd3.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CNIgQMUD.js";import"./useFocusable-CfD6tvJl.js";import"./Dialog-BIYJU2zM.js";import"./RSPContexts-C4NdBiWw.js";import"./OverlayArrow-SVlp-MsH.js";import"./useControlledState-6bl2dGVj.js";import"./Collection-DD9J8E7A.js";import"./CollectionBuilder-Du6oRztu.js";import"./SelectionIndicator-D_z5mUiE.js";import"./Separator-CYgXLQLG.js";import"./getActionGroupSlot-DtMTeAyj.js";import"./useStatic-CjurL4ph.js";import"./context-Daw8U4Js.js";import"./Popover-C115A6YY.js";import"./OverlayTrigger-DNeJhO1q.js";import"./ControlledNotification-CDkn9KZJ.js";import"./ClearPropsContextView-CAdlfc13.js";import"./LayoutCard-CMFbelm1.js";import"./Accordion-CzTFBALa.js";import"./Alert-dpgOlODz.js";import"./AlertIcon-B3A4X_sK.js";import"./AlertBadge-Dq9DVS5i.js";import"./Align-CFZ1LY0A.js";import"./TableFooterRow-CRyq0jGz.js";import"./SkeletonText-BCJdJN6R.js";import"./Avatar-n_FddWww.js";import"./AvatarStack-CvAiayTs.js";import"./Badge-uzHJfnKo.js";import"./BigNumber-DrIFCaGd.js";import"./Breadcrumb-B8lYz9_y.js";import"./Link-DogKVCCD.js";import"./Heading-DPk654Hf.js";import"./Legend-BkNadFCs.js";import"./FileCardList-BNGc6aOj.js";import"./Image-BEfxF6T9.js";import"./CodeBlock-DSg-nhOy.js";import"./CopyButton-CZhO6Nhd.js";import"./Tooltip-D_N9SR4J.js";import"./react-children-utilities-DOiAuRf4.js";import"./Color-DBB9cX_W.js";import"./Content-CvN0_ss6.js";import"./ContextualHelpTrigger-vkCuzPHd.js";import"./CounterBadge-Cn-gsYji.js";import"./DonutChart-wtRyVNEh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bs9W_mBy.js";import"./Header-CkIj4hO8.js";import"./Initials-Br4OSSj1.js";import"./InlineCode-BqeHYcPm.js";import"./LabeledValue-BxYfrfye.js";import"./PopoverTrigger-BRJuSawv.js";import"./Markdown-DxtSH8Qa.js";import"./Separator-9lIY6dJp.js";import"./Message-OUU1Dsa7.js";import"./MessageSeparator-D6U6_eDI.js";import"./NavigationGroup-2DULbM-2.js";import"./Notification-BLTpV9Pw.js";import"./NotificationProvider-CbEuWtZU.js";import"./ProgressBar-Zqb7xbt9.js";import"./Rating-_8rxFd72.js";import"./Skeleton-xJrss3aj.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
