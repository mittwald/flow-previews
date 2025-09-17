import{j as r}from"./iframe-CqRNQciv.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-Byt1rMjk.js";import{L as m}from"./Link-vZo3h5bB.js";import{H as s}from"./HeaderNavigation-D0wKc6fq.js";import{B as o}from"./Button-BQVO0si3.js";import{T as p}from"./Text-BmM8CnJX.js";import{I as C}from"./Image-BMEGxR64.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DVzr9j9m.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Dhxi8IEq.js";import"./ContextMenuSection-CDigFLUn.js";import{a as D,M as E}from"./Modal-pEPXE3T6.js";import{H as G}from"./Heading-CQg1SG_l.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./context-DEliiBST.js";import"./utils-CDZvBAhZ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Qa0Hjq2B.js";import"./useFocus-C23Lw-eJ.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocusable-Bbxq5z2c.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B7q__8zb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cp6wFlJh.js";import"./ProgressBar-BcNp5lkE.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./useLabel-B8y4VsiL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DF98vWDx.js";import"./EmulatedBoldText-Dxetj7v-.js";import"./Text-DPg2upf1.js";import"./AlertIcon-Dcz2iNlR.js";import"./Action-atfzbcNo.js";import"./context-BVMhSMnq.js";import"./useStatic-DY1i4yNR.js";import"./getActionGroupSlot-CoRCewfO.js";import"./Popover-NzuYkbSd.js";import"./DialogTriggerView-BgdRS1kA.js";import"./Dialog-D7VtK-4A.js";import"./RSPContexts-Cux7rZ-z.js";import"./OverlayArrow-DyqT2ErN.js";import"./useControlledState-CM_u9bSJ.js";import"./Collection-p1kezi7h.js";import"./CollectionBuilder-C5f-xul0.js";import"./Separator-DooYmmOD.js";import"./Group-BjCh3wTR.js";import"./SearchField-CmWplFkj.js";import"./FieldError-DSIOhjbk.js";import"./Form-B_ua98af.js";import"./useTextField-mA3ppTq3.js";import"./useFormReset-1xQ2Hjo2.js";import"./TextField-Bz3Bvh6E.js";import"./useEvent-QhZz2GUM.js";import"./SelectionManager-BZWRaM2c.js";import"./useCollator-DR7vJXcv.js";import"./FocusScope-1rZ1gxhZ.js";import"./VisuallyHidden-CgIcH36Q.js";import"./Switch-C_nyWGaw.js";import"./Label-B1-MUuXM.js";import"./useToggleState-UAGGJSlT.js";import"./Overlay-BwNeueP1.js";import"./ButtonView-DIYvBP4u.js";import"./Heading-D9MkxIpz.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
