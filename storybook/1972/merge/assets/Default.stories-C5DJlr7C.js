import{j as r}from"./iframe-ezKPDceg.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-iHRHTv2O.js";import{L as m}from"./Link-C5-86OP6.js";import{H as s}from"./HeaderNavigation-Bb0kcJ7K.js";import{B as o}from"./Button-DbzZMeUS.js";import{T as p}from"./Text-CUR3tOrp.js";import{I as C}from"./Image-Btr6DTvD.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CbdvW1pK.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DwUgVKJi.js";import"./ContextMenuSection-Dcb6Xv1B.js";import{a as D,M as E}from"./Modal-CkVan69k.js";import{H as G}from"./Heading-DVG7oq5P.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./context-BrV7YpGK.js";import"./utils-DzswpBsb.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DYKNfU9_.js";import"./useFocus-DJ-TYVVM.js";import"./useFocusRing-gH5JHApn.js";import"./useFocusable-B-msIfGP.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BRfDN20n.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DO9HCw5q.js";import"./ProgressBar-C6U_wRip.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./useLabel-CN4tRF6C.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BOjVaVGi.js";import"./EmulatedBoldText-BpljTSGS.js";import"./Text-BuR4UJfD.js";import"./AlertIcon-gAVqPSmq.js";import"./Action-BGk66KIT.js";import"./context-dSZ45fFT.js";import"./useStatic-CNaXVqhs.js";import"./getActionGroupSlot-BkTiqldw.js";import"./Popover-BMGoBdJj.js";import"./DialogTriggerView-B6gXU8vi.js";import"./Dialog-CsG1YX16.js";import"./RSPContexts-D9JC3ke5.js";import"./OverlayArrow-Cg5cqTaC.js";import"./useControlledState-BblR5lPL.js";import"./Collection-ZxatR5QS.js";import"./CollectionBuilder-CeLFQwBB.js";import"./Separator-Dbz-9PCT.js";import"./Group-BDVVyk9o.js";import"./SearchField-CcD3FqPJ.js";import"./FieldError-D8wvACBx.js";import"./Form-CmBAUGhT.js";import"./useTextField-Dj17RY-h.js";import"./useFormReset-pmH2UUNu.js";import"./TextField-CfP2mJzy.js";import"./useEvent-RmC2LF0W.js";import"./SelectionManager-DbiWXVNm.js";import"./useCollator-CIKaMC9W.js";import"./FocusScope-eYFIheUb.js";import"./VisuallyHidden-CoNZ8DQ3.js";import"./Switch-Dss1tbCC.js";import"./Label-BzVYbGPL.js";import"./useToggleState-B3aFa2M0.js";import"./Overlay-BPuLN2AX.js";import"./ButtonView-B1vfxIN2.js";import"./Heading-DdCynKl4.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
