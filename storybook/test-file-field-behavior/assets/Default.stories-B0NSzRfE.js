import{R as e,r as O}from"./index-B-o1Wr-g.js";import{L as l}from"./Label-D1gQZv67.js";import{F as o}from"./FileField-DyQkILmo.js";import{B as r}from"./Button-CAPBBAH6.js";import{S as f}from"./Section-CT9dD0YZ.js";import{F as j}from"./FieldError-zIiVOJJb.js";import{F as z}from"./FieldDescription-DL_UboA3.js";import{c as J,a as K}from"./IconApp-3W3XzCjg.js";import{u as U,F as T,t as _}from"./Form-B8tTkqcy.js";import{a as N}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as M}from"./ActionGroup-CriEXt9Q.js";import{F as Q}from"./FileCardList-CgTVoBU6.js";import{F as V}from"./FileCard-CN1j3PSc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Bz6Io0hO.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Label-CqgmsInd.js";import"./utils-7gTBvjqH.js";import"./Hidden-CRdWNeH8.js";import"./FieldError-Dc7wTCBj.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-R-rrVGxo.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-In3k7nSs.js";import"./IconWarning-BoAQPcSM.js";import"./Wrap-DQq6jo70.js";import"./Text-9mML8Z29.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-DNhPsDbg.js";import"./Button-CPCoFgob.js";import"./ProgressBar-BQAJCbMD.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./usePress-C3EQNDer.js";import"./ContextMenuSection-B0aP5-y_.js";import"./Action-v-b0G_7k.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CbvlC6bd.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./v4-CQkTLCs1.js";import"./ColumnLayout-3vFBx2eH.js";import"./Avatar-Bl9Q2YEB.js";import"./react-children-utilities-xgYgah_I.js";import"./Image-BiVvrFkK.js";import"./Link-CdJOoeBw.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var X=J("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const mt={title:"Form Controls/FileField",component:o,render:t=>e.createElement(o,{...t},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select"))},Y=N("submit"),c={},m={render:t=>e.createElement(o,{...t},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select"),e.createElement(z,null,"Supported formats: .pem, .pfx"))},s={render:t=>e.createElement(o,{...t,isInvalid:!0},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select"),e.createElement(j,null,"File too large"))},p={render:t=>e.createElement(o,{...t},e.createElement(r,{variant:"soft","aria-label":"Select certificate"},e.createElement(K,null,e.createElement(X,null))))},u={render:t=>{const[i,a]=O.useState(null),n=i==null?void 0:i[0];return e.createElement(f,null,e.createElement(o,{...t,isInvalid:!0,onChange:a},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select")),n==null?void 0:n.name)}},d={render:()=>{var a,n;const t=U(),i=_();return e.createElement(T,{form:t,onSubmit:Y},e.createElement(f,null,e.createElement(i,{name:"file",rules:{required:"Please choose a file"}},e.createElement(o,{multiple:!0},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select"))),(n=(a=t.watch("file"))==null?void 0:a[0])==null?void 0:n.name,e.createElement(M,null,e.createElement(r,{type:"submit"},"Upload"))))}},F={render:()=>{const t=U(),i=_(),a=async()=>{},n=t.watch("file");return e.createElement(e.Fragment,null,e.createElement(T,{form:t,onSubmit:a},e.createElement(f,null,e.createElement(i,{name:"file",rules:{required:"Please choose a file"}},e.createElement(o,{multiple:!0},e.createElement(l,null,"Certificate"),e.createElement(r,{variant:"outline",color:"secondary"},"Select"))),e.createElement(Q,null,[...n??[]].map(E=>e.createElement(V,{type:"certificate",onDelete:()=>{t.resetField("file")},name:E.name,key:E.name}))),e.createElement(M,null,e.createElement(r,{type:"submit"},"Upload")))))}};var S,b,h;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,B,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var v,L,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var I,D,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var W,w,P;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(P=(w=u.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,x,G;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(G=(x=d.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var R,q,H;F.parameters={...F.parameters,docs:{...(R=F.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    const handleSubmit = async () => {
      //do nothing
    };
    const watchedFiles = form.watch("file");
    return <>
        <Form form={form} onSubmit={handleSubmit}>
          <Section>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField multiple>
                <Label>Certificate</Label>
                <Button variant="outline" color="secondary">
                  Select
                </Button>
              </FileField>
            </Field>

            <FileCardList>
              {[...(watchedFiles ?? [])].map(file => <FileCard type={"certificate"} onDelete={() => {
              form.resetField("file");
            }} name={file.name} key={file.name} />)}
            </FileCardList>
            <ActionGroup>
              <Button type="submit">Upload</Button>
            </ActionGroup>
          </Section>
        </Form>
      </>;
  }
}`,...(H=(q=F.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const st=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm","Test"];export{c as Default,p as IconButton,F as Test,m as WithDescription,s as WithError,u as WithHandler,d as WithReactHookForm,st as __namedExportsOrder,mt as default};
