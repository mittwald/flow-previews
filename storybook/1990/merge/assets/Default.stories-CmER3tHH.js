import{j as r}from"./iframe-k0i0tSJI.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-Dg2SDivU.js";import{L as m}from"./Link-BeuT36KM.js";import{H as s}from"./HeaderNavigation-BO8xibRf.js";import{B as o}from"./Button-oL_0-1Fa.js";import{T as p}from"./Text-Cgxvqary.js";import{I as C}from"./Image-58b1K0z2.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DGhP3hPS.js";import{b as y,C as A,M as c}from"./ContextMenuSection-IOVcwMb-.js";import{a as D,M as E}from"./Modal-DZDOF9Ii.js";import{H as G}from"./Heading-CnN6g1-i.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./context-C6mYXPQf.js";import"./utils-BgzpsI0V.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BmNwYdlA.js";import"./useFocus-rEgPF8zF.js";import"./useFocusRing-CO9MadZb.js";import"./useFocusable-B3ABF-8R.js";import"./dynamic-BLAyWru4.js";import"./LoadingSpinner-DmRdTw1-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-S7ehKHFA.js";import"./ProgressBar-BxBVznBa.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./useLabel-r92EfUV9.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-4UXY86st.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./Text-BxPl3Uwa.js";import"./AlertIcon-CorkigaR.js";import"./Action-rR3xN66w.js";import"./context-Cc3HDEYK.js";import"./useStatic-6jrFBcb4.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./RSPContexts-DMQIQMHx.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./useControlledState-ydeueESl.js";import"./FocusScope-CCUvRh1k.js";import"./useCollator-CWffamPy.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Collection-BePmPaDd.js";import"./CollectionBuilder-8mCwZtNW.js";import"./context-CLpMNAUD.js";import"./Separator-BiKptde_.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Switch-B3sHBAbd.js";import"./Label-qKeJblmJ.js";import"./useToggleState-BCbr7zxa.js";import"./useFormReset-DpoZWz7L.js";import"./Overlay-e3_zwSDU.js";import"./ButtonView-C1mR-1Lh.js";import"./Heading-CjvbCWNJ.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
