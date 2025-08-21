import{j as r}from"./iframe-BvdD6qXg.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-BNkxb_83.js";import{L as m}from"./Link-B-UxIpFt.js";import{H as s}from"./HeaderNavigation-BuHuohup.js";import{B as o}from"./Button-7ivsFGmn.js";import{T as p}from"./Text-CCdgZxrm.js";import{I as C}from"./Image-E11XnrMw.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-868yG9Ya.js";import{a as y,C as A,M as c}from"./ContextMenuContent-jCsdD8qY.js";import"./ContextMenuSection-CAjXX6Mq.js";import{a as D,M as E}from"./Modal-D3TN59KH.js";import{H as G}from"./Heading-4ynE8vAD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./context-CM85t4Ux.js";import"./utils-DLyEFlgv.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-2QIW6EnW.js";import"./useFocus-ByAGBV0g.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BmDETFjn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./useLabel-qrx4I7MD.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./Text-D84jcunx.js";import"./AlertIcon-DNNQdUqp.js";import"./Action-GPgeTEUr.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./getActionGroupSlot-D52RJivz.js";import"./Popover-DcMPgkPU.js";import"./DialogTriggerView-1z2kdnQv.js";import"./Dialog-BGFaL9Kl.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./useControlledState-9GcYGGux.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./Group-CrFlWLH5.js";import"./SearchField-Cf5LxW_o.js";import"./FieldError-BhEhBaOS.js";import"./Form-BShbB3hD.js";import"./useTextField-8lhmPbxJ.js";import"./useFormReset-yMYSmHMi.js";import"./TextField-DFc82d9L.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./Switch-BkWHYAwZ.js";import"./Label-BnuyVShl.js";import"./useToggleState-D5sDMtE_.js";import"./Overlay-DIp7B4ea.js";import"./ButtonView-Cvnfgofo.js";import"./Heading-C-rB2L_h.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
