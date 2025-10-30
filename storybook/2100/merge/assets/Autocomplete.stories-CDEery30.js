import{j as r,r as j}from"./iframe-DGNlk_vV.js";import{u as d,F as u,t as g,a as h}from"./Form-BLozTJeu.js";import{B as i}from"./Button-DhezJY1m.js";import{S as b}from"./Section-oB0UkYgk.js";import{A as E}from"./ActionGroup-B5jvEoxw.js";import{s as f}from"./Action-rOePJQYP.js";import{A as m,T as l,F as S,O as T}from"./Modal-Dqy40C9s.js";import{L as a}from"./Label-C-LvYOEv.js";import"./index-nuYtCEEu.js";import"./dynamic-CKWjdq05.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./clsx-B-dksMZM.js";import"./index-Bbt_YQGl.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./context-BQuOJgUT.js";import"./browser-ec9CZx7q.js";import"./utils-DL8q1so0.js";import"./IconWarning-C6wJTaOd.js";import"./Text-DsxTDDTq.js";import"./EmulatedBoldText-Bby43l11.js";import"./LoadingSpinner-Vfx511Qq.js";import"./Button-DpZIFY9G.js";import"./ProgressBar-BoB3EqYI.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DxF43p1t.js";import"./useFocusable-CXOlwDl1.js";import"./Dialog-btvz5H9Q.js";import"./RSPContexts-ClaGjYhr.js";import"./OverlayArrow-DNNRAYvS.js";import"./useControlledState-UWLM0vlv.js";import"./Collection-ChtRuM1d.js";import"./CollectionBuilder-BJ_Sw59I.js";import"./SelectionIndicator-B0PsrhoI.js";import"./Separator-BOOd5uBZ.js";import"./getActionGroupSlot-DqNd_pBE.js";import"./useStatic-D_bMrpdM.js";import"./context-CfZGyFhp.js";import"./Popover-C8jQUmvs.js";import"./OverlayTrigger-Uz8qZ1np.js";import"./ControlledNotification-CLuRI8eV.js";import"./ClearPropsContextView-NN4EGP09.js";import"./LayoutCard-Bi4mSr74.js";import"./Accordion-ral1YniH.js";import"./Alert-XjfM08Aq.js";import"./AlertIcon-DkXhyzKN.js";import"./AlertBadge-CBXPV5eK.js";import"./Align-D4P59A8y.js";import"./TableFooterRow-BpMW61H4.js";import"./SkeletonText-J_7Ni8Mk.js";import"./Avatar-Dw_c7mqj.js";import"./AvatarStack-33IzluzG.js";import"./Badge-Dv-EenjR.js";import"./BigNumber-vSkzSwe6.js";import"./Breadcrumb-DzZ7GAz2.js";import"./Link-B-YmT7AY.js";import"./Heading-L3PTpp92.js";import"./Legend-CZSR-8sq.js";import"./FileCardList-CPC5o29W.js";import"./Image-ueWl-811.js";import"./CodeBlock-D4ETgOxi.js";import"./CopyButton-Bm9lbUjF.js";import"./Tooltip-MnuGQmV-.js";import"./react-children-utilities-C0bzJkZ7.js";import"./Color-DqV6qNlZ.js";import"./Content-ol93GJzs.js";import"./ContextualHelpTrigger-BP63Y_WB.js";import"./CounterBadge-hqs-zUxV.js";import"./DonutChart-BvfT4frN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BF1clYx1.js";import"./Header-Ch__bQKy.js";import"./Initials-C7j3L0wD.js";import"./InlineCode-C_cjRttB.js";import"./LabeledValue-C3kPJ1aU.js";import"./PopoverTrigger-DTI8QbE9.js";import"./Markdown-BMPTuZdO.js";import"./Separator-CJaXs9en.js";import"./Message-_Z1AL0qW.js";import"./MessageSeparator-CF43wMDs.js";import"./NavigationGroup-BUYtw5-B.js";import"./Notification-B4EHDdCQ.js";import"./NotificationProvider-DahzwZut.js";import"./ProgressBar-a361S-qP.js";import"./Rating-D2kSNe99.js";import"./Skeleton-BrrKNlRW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
